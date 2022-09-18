const { users, funcionariosRegistro, entidadesRegistro } = require("./db.js");

let funcionariosRegId = funcionariosRegistro.length;

exports.getFuncionariosRegistro = (req, res) => {

  setTimeout(() => {
    const result = funcionariosRegistro.map((item) => item);
    res.status(200).json({ message: "all-items", result });
  }, 500);
};

exports.getFuncionariosRegistroByER = (req, res) => {
  const erId = parseInt(req.params.id);
  setTimeout(() => {
    const result = funcionariosRegistro.filter( item => item.erId === erId);
    res.status(200).json({ message: "all-items", result });
  }, 500);
};

exports.getFuncionariosRegistroByName = (req, res) => {
  const name = req.params.name;
  
  const result = funcionariosRegistro.find( item => item.name === name );
  setTimeout(()=>{
    res.status(200).json({ result, message: "gotten-by-id" })
  }, 500);
};
 

//this is okey!
exports.getFuncionarioRegistroById = (req, res) => {
  const { id } = req.params;
  const result = funcionariosRegistro.find((item) => item.id === parseInt(id));
  setTimeout(()=>{
    res.status(200).json({ result, message: "gotten-by-id" });
  }, 500);
};

exports.getFuncionariosRegistroEnabled = (req, res) => {
  const result = funcionariosRegistro.filter((item) => (item.enabled === true ));
  res.status(200).json({ result, message: "enabled" });
};

exports.createFuncionarioRegistro = (req, res) => {

  const name= req.body.name;
  const phone = req.body.phone;
  const erId= parseInt(req.body.erId);
  const userId= req.body.userId;

  const result = {
    id: ++funcionariosRegId,
    name: name,
    phone: phone,
    erId: erId,
    userId: userId,
    enabled: true,
  };

  funcionariosRegistro.push(result);
  res.status(201).json({ message: "created" });
};

exports.updateFuncionarioRegistro = (req, res) => {

  const id = parseInt(req.params.id);
  const name= req.body.name;
  const phone = req.body.phone;
  const erId= parseInt(req.body.erId);
  const userId= req.body.userId;
  const enabled = req.body.enabled;
  const result = {
    id: id,
    name: name,
    phone: phone,
    erId: erId,
    userId: userId,
    enabled: Boolean(enabled),
  };

  funcionariosRegistro[id - 1] = result;
  res.status(201).json({ message: "updated" });
};
