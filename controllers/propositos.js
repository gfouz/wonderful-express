const { propositos } = require("./db.js");

let propositoId = propositos.length;

exports.getPropositos = (req, res) => {
  setTimeout(() => {
    const result = propositos.map((item) => item);
    res.status(200).json({ message: "all-items", result });
  }, 500);
};

exports.createProposito = (req, res) => {
  const proposito = {
    id: ++propositoId,
    name: req.body.name,
    enabled: true,
  };
  propositos.push(proposito);
  res.status(201).json({ message: "created" });
};
//this is okey!
exports.getPropositosById = (req, res) => {
  const { id } = req.params;
  const result = propositos.find((item) => item.id === parseInt(id));
  setTimeout(()=>{
    res.status(200).json({ result, message: "gotten-by-id" })
  }, 500)
  
};

exports.getPropositosEnabled = (req, res) => {
  const { enabled } = req.body; 
  
  const result = propositos.filter((item) => (item.enabled === true ));
  res.status(200).json({ result, message: "enabled" });
};

exports.updateProposito = (req, res) => {

  const id = parseInt(req.params.id);
  const name = req.body.name;
  const enabled = req.body.enabled;

  const result = {
    id: id,
    name: req.body.name,
    enabled: Boolean(enabled),
  };
  propositos[id - 1] = result;
  res.status(201).json({ message: "updated" });
};
