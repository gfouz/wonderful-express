
const { empresasInstituciones } = require("./db.js");

let empresasInstitucionesId = empresasInstituciones.length;


exports.getEmpresasInstituciones = (req, res) => {
  setTimeout(() => {
    const result = empresasInstituciones.map((item) => item);
    res.status(200).json({ message: "all-items", result });
  }, 500);
};

exports.getEmpresasInstitucionesByMunByOrg = (req, res) => {
  setTimeout(() => {
    const result = empresasInstituciones.map((item) => item);
    res.status(200).json({ message: "all-items", result });
  }, 500);
};

exports.getEmpresasInstitucionesByMunByOrgEnabled = (req, res) => {
  setTimeout(() => {
    const result = empresasInstituciones.map((item) => item);
    res.status(200).json({ message: "all-items", result });
  }, 500);
};


exports.getEmpresasInstitucionesEnabled = (req, res) => {
  const { enabled } = req.body; 
  const result = empresasInstituciones.filter(item => item.enabled === true );
  res.status(200).json({ result, message: "enabled" });
  console.log(result)
};


exports.getEmpresaInstitucionById = (req, res) => {
  const { id } = req.params;
  const result = empresasInstituciones.find((item) => item.id === parseInt(id));
    res.status(200).json({ result, message: "gotten-by-id" });
  
};

exports.createEmpresaInstitucion = (req, res) => {
  const id = ++empresasInstituciones;
  const name = req.body.name;
  const organismoId = req.body.organismoId;
  const municipioId = req.body.municipioId;


  const result = {
    id: ++empresasInstituciones,
    name: name,
    municipioId: municipioId,
    organismoId: organismoId,
    enabled: true
  };

  empresasInstituciones.push(result);
  res.status(201).json({ message: "created" });

};

exports.updateEmpresaInstitucion = (req, res) => {
  const id = parseInt(req.params.id);
  const name = req.body.name;
  const organismoId = req.body.organismoId;
  const municipioId = req.body.municipioId;
  const enabled = req.body.enabled;

  const result = {
    id: id,
    name: name,
    municipioId: municipioId,
    organismoId: organismoId,
    enabled: Boolean(enabled),
  };
  empresasInstituciones[id - 1] = result;
  res.status(201).json({ message: "updated" });
  
};

