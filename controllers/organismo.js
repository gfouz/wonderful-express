const { users, rols, funcionalidades, organismos } = require("./db.js");


let organismoId = rols.length;

exports.getOrganismos = (req, res) => {
  const result = organismos.map((item) => item);
  res.status(200).json({ result, message: "all-items" });
};
exports.createOrganismo = (req, res) => {
  const organismo = {
    id: ++organismoId,
    name: req.body.name,
    enabled: true,
  };

  organismos.push(organismo);

  setTimeout(() => {
    res.status(200).json({ message: "created" });
  }, 500);
};
exports.getOrganismoById = (req, res) => {
  const { id } = req.params;
  const result = organismos.find((item) => item.id === parseInt(id));
  res.status(200).json({ result, message: "gotten-by-id" });
};

exports.getOrganismosEnabled = (req, res) => {
  const { enabled } = req.params;
  const result = organismos.filter((item) => item.enabled === true );
  res.status(200).json({ result, message: "enabled" });
};

exports.updateOrganismo = (req, res, next) => {
  console.log("organismos")
  const id = parseInt(req.params.id);
  const name = req.body.name;
  const enabled = req.body.enabled;

  const organismo = {
    id: id,
    name: name,
    enabled: enabled,
  };
  organismos[id - 1] = organismo;
  res.status(200).json({ message: "updated" });
};

