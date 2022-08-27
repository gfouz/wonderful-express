
   const funcionalidades = [
  {
    id: 1,
    name: "Admin.. Provincias",
    enabled: true,
  },
  {
    id: 2,
    name: "Admin.. Organismos",
    enabled: true,
  },
  {
    id: 3,
    name: "Admin.. Rols",
    enabled: true,
  },
  {
    id: 4,
    name: "Admin.. Estados",
    enabled: true,
  },
  {
    id: 5,
    name: "Admin.. Funcionalidades",
    enabled: true,
  },
  {
    id: 6,
    name: "Admin.. Usuarios",
    enabled: true,
  },
  {
    id: 7,
    name: "Admin.. Municipios",
    enabled: true,
  },
  {
    id: 8,
    name: "Admin.. Empresas o Instituciones",
    enabled: true,
  },
  {
    id: 9,
    name: "Admin.. Representantes",
    enabled: true,
  },
  {
    id: 10,
    name: "Administrar Entidades de Registro",
    enabled: true,
  },
  {
    id: 11,
    name: "Solicitar Generación de un Certificado",
    enabled: true,
  },
  {
    id: 12,
    name: "Solicitar Renovación de un Certificado",
    enabled: true,
  },
  {
    id: 13,
    name: "Solicitar Revocación de un Certificado",
    enabled: true,
  },
  {
    id: 14,
    name: "Administrar Funcionarios de Entidades de Registro",
    enabled: true,
  },
  {
    id: 15,
    name: "Validar Solicitudes como Entidad de Registro",
    enabled: true,
  },
  {
    id: 16,
    name: "Administrar Tarifas",
    enabled: true,
  },
  {
    id: 17,
    name: "Consultar Solicitudes",
    enabled: true,
  },
  {
    id: 18,
    name: "Validar Solicitudes como Representante",
    enabled: true,
  },
];

const users = [
  {
    id: 1,
    email: "gfouz1975@gmail.com",
    password: "$2b$10$xNCl0LRLSPNppLeMje3XjOxQUfut.5nNJUPnAieeiOABbJJHcpE7u",
    enabled: true,
    rolId: 1,
  },
  {
    id: 2,
    email: "laura2004@gmail.com",
    password: "$2b$10$rPCKN/be5mJzM8edV057vu2H71lZcvMEAVPTUK1Kixk.qpsWXiZG6",
    enabled: false,
    rolId: 2,
  },
];

 const rols = [
{
    id: 1,
    name: "admin",
    enabled: false
},
{
    id: 2,
    name:  "user",
    enabled: true
}
];   

 const provincias = [
{
    id: 1,
    name:  "Mayabeque",
    enabled: false
},
{
    id: 2,
    name:  "Habana",
    enabled: true
}
];   

module.exports = { funcionalidades, users, rols, provincias}