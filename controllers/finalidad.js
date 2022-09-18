

const { tarifas, finalidades } = require("./db.js");

let finalidadId = finalidades.length;

exports.getFinalidades = (req, res) => {
  setTimeout(() => {
    const result = finalidades.map((item) => item);
    res.status(200).json({ message: "all-items", result });
  }, 500);
};

exports.createFinalidad = (req, res) => {
  const finalidad = {
    id: ++finalidadId,
    name: req.body.name,
  };

  finalidades.push(finalidad);
  res.status(201).json({ message: "created" });
};
//this is okey!
exports.getFinalidadById = (req, res) => {
  const { id } = req.params;
  const result = finalidades.find((item) => item.id === parseInt(id));
  setTimeout(()=>{
    res.status(200).json({ result, message: "gotten-by-id" })
  }, 500)
  ;
};



exports.updateFinalidad = (req, res) => {
  const id = parseInt(req.params.id);
  const name = req.body.name;
  const enabled = req.body.enabled;

  const result = {
    id: id,
    name: req.body.name,
    enabled: enabled
  };
  finalidades[id - 1] = result;
  res.status(201).json({ message: "updated" });
};
