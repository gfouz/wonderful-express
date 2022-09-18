

const { users, rols, funcionalidades, provincias } = require("./db.js");

let provinciaIdCounter = provincias.length;

exports.getProvinces = (req, res) => {
  
  setTimeout(() => {
    const result = provincias.map((item) => item);
    res.status(200).json({ message: "all-items", result });
  }, 500);
};

exports.createProvince = (req, res) => {
  const province = {
    id: ++provinciaIdCounter,
    name: req.body.name,
    enabled: true,
  };
  provincias.push(province);
  res.status(201).json({ message: "created" });
};
//this is okey!
exports.getProvinceById = (req, res) => {
  
  const { id } = req.params;
  const result = provincias.find((item) => item.id === parseInt(id));
  setTimeout(()=>{
    res.status(200).json({ result, message: "gotten-by-id" })
  }, 500)
  ;
};

exports.getProvinciasEnabled = (req, res) => {

  const { enabled } = req.body; 
  const result = provincias.filter((item) => (item.enabled === true ));
  res.status(200).json({ result, message: "enabled" });
};

exports.updateProvincia = (req, res) => {

  const id = parseInt(req.params.id);
  const name = req.body.name;
  const enabled = req.body.enabled;

  const result = {
    id: id,
    name: req.body.name,
    enabled: Boolean(enabled),
  };
  provincias[id - 1] = result;
  res.status(201).json({ message: "updated" });
};
