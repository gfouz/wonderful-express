const { 
  users, 
  rols, 
  provincias, 
  municipios, 
  funcionalidades,
  searchAssociated
} = require("./db.js");

let municipiosId = municipios.length;

function findbyAssociation(array1, array2) {
  return array1.filter(object1 => {
    return array2.filter(object2 => {
      return object1.id === object2.id;
    });
  });
}

exports.getMunicipios = (req, res) => {
	setTimeout(() => {
    const result = municipios.map((item) => item);
    res.status(200).json({ message: "all-items", result });
  }, 500);
}


exports.getMunicipiosByProvincia = (req, res) => {
  
  const { id } = req.params;
	const province = provincias.find( item => item?.id === parseInt(id && id) );
  const result = municipios.filter( item => item.provinciaId === province?.id );
   result && res.status(200).json({ message: "associated", result }) ;
}


exports.getMunicipiosByProvinciaEnabled = (req, res) => {
	const enabledprovinces = provincias.filter( prov => prov.enabled === true);
  const result = searchAssociated(municipios, enabledprovinces);
  result && res.status(200).json({ message: "associated", result });
}


exports.getMunicipioById = (req, res) => {
  const { id } = req.params;
  const result = municipios.find((item) => item.id === parseInt(id));
  if(result == undefined)
  { res.status(400).json({ result, error: "Not-found" });}
  else {res.status(200).json({ result, message: "found by id" });}
}


exports.getMunicipiosEnabled = (req, res) => {
  const { enabled } = req.params; 
  const param = enabled && enabled;
  const result = municipios.filter((item) => (item.enabled === Boolean(param) ) );
  res.status(200).json({ result, message: "enabled" });
};


exports.createMunicipio = (req, res) => {
  const { name, provinciaId} = req.body;
  const council = {
    id: ++municipiosId,
    name: req.body.name,
    enabled: true,
    provinciaId: provinciaId
  };
  municipios.push(council);
  setTimeout(() => {
  res.status(201).json({ message: "created" });
}, 1000);
}


exports.updateMunicipio = (req, res) => {

  const id = parseInt(req.params.id);
  const name = req.body.name;
  const enabled = req.body.enabled;
  const provinciaId = req.body.provinciaId;

  const result = {
    id: id,
    name: name,
    enabled: enabled,
    provinciaId: provinciaId
  };
  municipios[id - 1] = result;
  res.status(201).json({ message: "updated" });
}



