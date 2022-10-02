const { 
  users, 
  representantes,
  empresasInstituciones,
  searchAssociated
} = require("./db.js");

let representanteId = representantes.length;

function findbyAssociation(array1, array2) {
  return array1.filter(object1 => {
    return array2.filter(object2 => {
      return object1.id === object2.id;
    });
  });
}

exports.getRepresentantes = (req, res) => {
	setTimeout(() => {
    const result = representantes.map((item) => item);
    res.status(200).json({ message: "all-items", result });
  }, 500);
}


exports.getRepresentantesByEmpInst = (req, res) => {
  
 const eiId = parseInt(req.params?.id);
 const empresaInst = empresasInstituciones.find( item => item?.id === eiId );
 const result = representantes.filter( item => item.eiId === empresaInst?.id );
   result && res.status(200).json({ message: "associated", result }) ;
}


exports.getRepresentantesByName = (req, res) => {
  const name = req.params.name;
	const result = representantes.find( item => item.name === name );

  if(result == undefined)
  { res.status(400).json({ result, error: "Not-found" });}

  else {res.status(200).json({ result, message: "found by name" })
}
}

exports.getRepresentanteById = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`this is ${id}`)
  const result = representantes.find((item) => item.id === id );
  res.status(200).json({ result, message: "found by id" });
}


exports.getRepresentantesEnabled = (req, res) => {
  const result = representantes.filter((item) => (item.enabled === true ) );
  res.status(200).json({ result, message: "enabled" });
};


exports.createRepresentante = (req, res) => {

    const ci = parseInt(req.body.ci);
    const tome = parseInt(req.body.tome);
    const folio = parseInt(req.body.folio);
    const name = req.body.name;
    const phone = req.body.phone;
    const namer = req.body.namer;
    const namerCharge = req.body.namerCharge;
    const eiId = parseInt(req.body.eiId);
    const userId = req.body.userId;
    const enabled = req.body.enabled;

    const representante = {
    id: ++representanteId,
    ci: ci,
    tome: tome,
    folio: folio,
    name: name,
    phone: phone,
    namer: namer,
    namerCharge: namerCharge,
    eiId: eiId,
    userId: userId,
    enabled: enabled,
  };
  representantes.push(representante);
  res.status(201).json({ message: "created" });
}


exports.updateRepresentante = (req, res) => {

    const id = parseInt(req.params.id);
    const ci = parseInt(req.body.ci);
    const tome = parseInt(req.body.tome);
    const enabled = parseInt(req.body.enabled);
    const folio = parseInt(req.body.folio);
    const name = req.body.name;
    const phone = req.body.phone;
    const namer = req.body.namer;
    const namerCharge = req.body.namerCharge;
    const eiId = parseInt(req.body.eiId);
    const userId = req.body.userId;

    const result = {
    id: id,
    ci: ci,  
    tome: tome,
    folio: folio,
    name: name,
    phone: phone,
    namer: namer,
    namerCharge: namerCharge,
    eiId: eiId,
    userId: userId,
    enabled: enabled,
  };

  representantes[id - 1] = result;
  res.status(201).json({ message: "updated" });
}



