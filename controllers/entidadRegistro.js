const { entidadesRegistro, municipios, searchAssociated } = require("./db.js");

let entidadesRegistroId = entidadesRegistro.length;


exports.getEntidadesRegistro = (req, res) => {
	setTimeout(() => {
    const result = entidadesRegistro.map((item) => item);
    res.status(200).json({ message: "all-items", result });
  }, 500);
}


exports.getEntidadesRegistroByMun = (req, res) => {
  
  const { id } = req.params;
	const municipio = municipios.find( item => item?.id === parseInt(id) );
  const result = entidadesRegistro.filter( item => item.municipioId === municipio?.id );
   result && res.status(200).json({ message: "associated", result }) ;
}


exports.getEntidadesRegistroByMunEnabled = (req, res) => {
	const enabledmunicipios = municipios.filter( prov => prov.enabled === true);
  const result = searchAssociated(entidadesRegistro, enabledmunicipios);
  result && res.status(200).json({ message: "associated", result });
}


exports.getEntidadesRegistroById = (req, res) => {
  const { id } = req.params;
  const result = entidadesRegistro.find((item) => item.id === parseInt(id));
  if(result == undefined)
  { res.status(400).json({ result, error: "Not-found" });}
  else {res.status(200).json({ result, message: "found by id" });}
}


exports.getEntidadesRegistroEnabled = (req, res) => {
  const result = entidadesRegistro.filter(item => item.enabled === true);
  res.status(200).json({ result, message: "enabled" });
};


exports.createEntidadRegistro = (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    const municipioId = parseInt(req.body.municipioId);
    const result = {
    id: ++entidadesRegistroId,
    name: name,
    address: address,
    enabled: true,
    municipioId: municipioId
  };
  entidadesRegistro.push(result);
  res.status(201).json({ message: "created" });
}


exports.updateEntidadRegistro = (req, res) => {

    const id = parseInt(req.params.id);
    const name = req.body.name;
    const address = req.body.address;
    const enabled = Boolean(req.body.enabled);
    const municipioId = parseInt(req.body.municipioId);
    const result = {
    id: id,
    name: name,
    address: address,
    enabled: enabled,
    municipioId: municipioId
    };
    entidadesRegistro[id - 1] = result;
    res.status(201).json({ message: "updated" });
}



