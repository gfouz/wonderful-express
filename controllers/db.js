const users = [
  {
    id: 1,
    email: "gfouz1975@gmail.com",
    password: "123",
    rolId: 1,
    enabled: true,
  },
  {
    id: 2,
    email: "Sania@gmail.com",
    password: "123",
    rolId: 2,
    enabled: true,
  },

];



const representantes = [
 {
  id: 1,
  ci: 750624,
  tome: 2211,
  folio: 2122,
  name: "Giovani Fouz Jiménez",
  phone: "54278815",
  namer: "Pepin",
  namerCharge: "presidente",
  enabled: true,
  eiId: 2,
  userId: 1
},
{
  id: 2,
  ci: 772323,
  tome: 3333,
  folio: 4444,
  name: "Sania Leticia Ricardo Exposíto",
  phone: "53453212",
  namer: "Sandra",
  namerCharge: "Ama de casa",
  enabled: true,
  eiId: 1,
  userId: 2
 },
];


const propositos = [
  {
    id: 1,
    name: "Natural",
    enabled: true,
  },
  {
    id: 2,
    name: "Jurídica",
    enabled: true,
  },
];

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



const rols = [
  {
    id: 1,
    name: "administrador",
    enabled: true,
  },
  {
    id: 2,
    name: "segundo admin",
    enabled: true,
  },
  {
    id: 3,
    name: "tercer administrador",
    enabled: true,
  },
  {
    id: 4,
    name: "capitan",
    enabled: false,
  },
  {
    id: 5,
    name: "general",
    enabled: false,
  },
];

const provincias = [
  {
    id: 1,
    name: "Pinar de Río",
    enabled: true,
  },
  {
    id: 2,
    name: "La Habana",
    enabled: true,
  },
  {
    id: 3,
    name: "Mayabeque",
    enabled: true,
  },
  {
    id: 4,
    name: "Matanzas",
    enabled: false,
  },
  {
    id: 5,
    name: "Cienfuegos",
    enabled: false,
  },
  {
    id: 6,
    name: "Villa Clara",
    enabled: false,
  },
  {
    id: 7,
    name: "Camaguey",
    enabled: false,
  },
  {
    id: 8,
    name: "Las Tunas",
    enabled: true,
  },
  {
    id: 9,
    name: "Holguín",
    enabled: true,
  },
  {
    id: 10,
    name: "Granma",
    enabled: false,
  },
  {
    id: 11,
    name: "Santiago de Cuba",
    enabled: true,
  },
  {
    id: 12,
    name: "Guantanamo",
    enabled: true,
  },
];

const municipios = [
  {
    id: 1,
    name: "puerto padre",
    enabled: false,
    provinciaId: 8,
  },
  {
    id: 2,
    name: "chaparra",
    enabled: true,
    provinciaId: 8,
  },
  {
    id: 3,
    name: "delicias",
    enabled: false,
    provinciaId: 8,
  },
  {
    id: 4,
    name: "Amancio",
    enabled: false,
    provinciaId: 8,
  },
  {
    id: 5,
    name: "gibara",
    enabled: false,
    provinciaId: 9,
  },
  {
    id: 6,
    name: "freyre",
    enabled: false,
    provinciaId: 9,
  },
  {
    id: 7,
    name: "Alcides Pinos",
    enabled: false,
    provinciaId: 9,
  },
];

const organismos = [
  {
    id: 1,
    name: "PCC",
    enabled: false,
  },
  {
    id: 2,
    name: "MININT",
    enabled: true,
  },
  {
    id: 3,
    name: "FAR",
    enabled: true,
  },
  {
    id: 4,
    name: "MINCIN",
    enabled: false,
  },
  {
    id: 5,
    name: "MEP",
    enabled: false,
  },
  {
    id: 6,
    name: "MTSS",
    enabled: false,
  },
];

const estados = [
  { id: 1, name: "En Proceso", enabled: true },
  { id: 2, name: "Aprobada", enabled: true },
  { id: 3, name: "Publicada", enabled: true },
];

const finalidades = [
  { id: 1, name: "Para firma digital de mensajería y ficheros electrónicos" },
  {
    id: 2,
    name: "Para la protección de canales y servicios de comunicaciones",
  },
];

const empresasInstituciones = [
  {
    id: 1,
    name: "Universidad de Matanzas",
    enabled: true,
    organismoId: 1,
    municipioId: 1,
  },
  {
    id: 2,
    name: "Facultad de Medicina de Cárdenas",
    enabled: true,
    organismoId: 2,
    municipioId: 2,
  },
  {
    id: 3,
    name: "Empresa MICOM",
    enabled: false,
    organismoId: 3,
    municipioId: 3,
  },
  {
    id: 4,
    name: "MININT",
    enabled: false,
    organismoId: 4,
    municipioId: 4,
  },
  {
    id: 5,
    name: "MEP",
    enabled: false,
    organismoId: 5,
    municipioId: 5,
  },
  {
    id: 3,
    name: "FAR",
    enabled: false,
    organismoId: 6,
    municipioId: 6,
  },
];

const entidadesRegistro = [
  {
    id: 1,
    name: "Dirección del Gobierno Municipal de Matanzas",
    address: "Esquina Contreras y Libertad, Matanzas, Matanzas",
    enabled: true,
    municipioId: 2,
  },
  {
    id: 2,
    name: "Joven Club de Cárdenas",
    address: "Calle Real / Velázquez E Industria, Cárdenas, Matanzas",
    enabled: true,
    municipioId: 2,
  },
];

const funcionariosRegistro = [
  {
    id: 1,
    name: "Giovani Fouz Jiménez",
    phone: 54278815,
    enabled: true,
    erId: 2,
    userId: 1,
  },
  {
    id: 2,
    name: "laura Leticia Fouz Ricardo",
    phone: 56243303,
    enabled: true,
    erId: 1,
    userId: 2,
  },
  {
    id: 3,
    name: "Sania Ricardo Exposíto",
    phone: 52427208,
    enabled: true,
    erId: 1,
    userId: 3,
  },
];

const tarifas = [
  {id: 1, time: 1, price: 109.8, range: "A: 1-10", finalidadId: 1, enabled: true },
  {id: 2, time: 1, price: 106.51, range: "B: 11-15", finalidadId: 1, enabled: true },
  {id: 3, time: 1, price: 104.31, range: "C: 16-20", finalidadId: 1, enabled: true },
  {id: 3, time: 1, price: 102.11, range: "D: 21-25", finalidadId: 1, enabled: true },
  {id: 4, time: 1, price: 99.92, range: "E: 26-50", finalidadId: 1, enabled: true },
  {id: 5, time: 1, price: 97.72, range: "F: 51-100", finalidadId: 1, enabled: true },
  {id: 6, time: 1, price: 95.53, range: "G: 101-200", finalidadId: 1, enabled: true },
  {id: 7, time: 1, price: 93.33, range: "H: +200", finalidadId: 1, enabled: true },
  {id: 8, time: 2, price: 109.8, range: "A: 1-10", finalidadId: 1, enabled: true },
  {id: 9, time: 2, price: 106.51, range: "B: 11-15", finalidadId: 1, enabled: true },
  {id: 10, time: 2, price: 104.31, range: "C: 16-20", finalidadId: 1, enabled: true },
  {id: 11, time: 2, price: 102.11, range: "D: 21-25", finalidadId: 1, enabled: true },
  {id: 12, time: 2, price: 99.92, range: "E: 26-50", finalidadId: 1, enabled: true },
  {id: 13, time: 2, price: 97.72, range: "F: 51-100", finalidadId: 1, enabled: true },
  {id: 14, time: 2, price: 95.53, range: "G: 101-200", finalidadId: 1, enabled: true },
  {id: 15, time: 2, price: 93.33, range: "H: +200", finalidadId: 1, enabled: true },
  {id: 16, time: 1, price: 341.6, range: "A: 1-5", finalidadId: 2, enabled: true },
  {id: 17, time: 1, price: 331.35, range: "A: 6-10", finalidadId: 2, enabled: true },
  {id: 18, time: 1, price: 314.78, range: "A: +10", finalidadId: 2, enabled: true },
  {id: 19, time: 2, price: 669.54, range: "A: 1-5", finalidadId: 2, enabled: true },
  {id: 20, time: 2, price: 649.45, range: "A: 6-10", finalidadId: 2, enabled: true },
  {id: 21, time: 2, price: 616.98, range: "A: +10", finalidadId: 2, enabled: true },
];

const rolsfuncionalidades = [
  {
    rolId: 1,
    funcionalidadId: 11,
  },
  {
    rolId: 1,
    funcionalidadId: 12,
  },
  {
    rolId: 1,
    funcionalidadId: 13,
  },
  {
    rolId: 1,
    funcionalidadId: 17,
  },
  {
    rolId: 2,
    funcionalidadId: 9,
  },
  {
    rolId: 2,
    funcionalidadId: 15,
  },
  {
    rolId: 2,
    funcionalidadId: 17,
  },
  {
    rolId: 3,
    funcionalidadId: 1,
  },
  {
    rolId: 3,
    funcionalidadId: 2,
  },
  {
    rolId: 3,
    funcionalidadId: 3,
  },
  {
    rolId: 3,
    funcionalidadId: 4,
  },
  {
    rolId: 3,
    funcionalidadId: 5,
  },
  {
    rolId: 3,
    funcionalidadId: 6,
  },
  {
    rolId: 3,
    funcionalidadId: 7,
  },
  {
    rolId: 3,
    funcionalidadId: 8,
  },
  {
    rolId: 3,
    funcionalidadId: 10,
  },
  {
    rolId: 3,
    funcionalidadId: 14,
  },
  {
    rolId: 3,
    funcionalidadId: 16,
  },
  {
    rolId: 3,
    funcionalidadId: 17,
  },
  {
    rolId: 3,
    funcionalidadId: 19,
  },
  {
    rolId: 4,
    funcionalidadId: 17,
  },
  {
    rolId: 4,
    funcionalidadId: 18,
  },
];

const searchAssociated = (array1, array2) => {
  function findbyAssociation(array1, array2) {
    return array1.filter((object1) => {
      return array2.some((object2) => {
        return object1.provinciaId === object2.id;
      });
    });
  }

  const associatedElements = [
    ...findbyAssociation(array1, array2),
    ...findbyAssociation(array2, array1),
  ];

  return associatedElements;
};

module.exports = {
  rols,
  users,
  tarifas,
  estados,
  propositos,
  provincias,
  municipios,
  organismos,
  finalidades,
  representantes,
  funcionalidades,
  searchAssociated,
  entidadesRegistro,
  rolsfuncionalidades,
  empresasInstituciones,
  funcionariosRegistro,
};
