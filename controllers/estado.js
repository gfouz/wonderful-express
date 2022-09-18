const { estados } = require("./db.js");

let estadosId = estados.length;

exports.getEstados = (req, res) => {
  setTimeout(() => {
    const result = estados.map((item) => item);
    res.status(200).json({ message: "all-items", result });
  }, 500);
};

exports.createEstado = (req, res) => {
  const state = {
    id: ++estadosId,
    name: req.body.name,
    enabled: true,
  };
  estados.push(state);
  res.status(201).json({ message: "created" });
};
//this is okey!
exports.getEstadoById = (req, res) => {
  const { id } = req.params;
  const result = estados.find((item) => item.id === parseInt(id));
  setTimeout(()=>{
    res.status(200).json({ result, message: "gotten-by-id" })
  }, 500)
  ;
};

exports.getEstadosEnabled = (req, res) => {
  const { enabled } = req.body; 
  
  const result = estados.filter((item) => (item.enabled === true ));
  res.status(200).json({ result, message: "enabled" });
};

exports.updateEstado = (req, res) => {
  const id = parseInt(req.params.id);
  const name = req.body.name;
  const enabled = req.body.enabled;

  const result = {
    id: id,
    name: req.body.name,
    enabled: enabled,
  };
  estados[id - 1] = result;
  res.status(201).json({ message: "updated" });
};
