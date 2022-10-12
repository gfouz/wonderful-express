const Router = require("express");
const router = Router();
const { protected } = require("../middlewares/authenticateToken.js");
const { httpParser } = require("../middlewares/bodyParser.js");

const {
  getProvinces,
  createProvince,
  getProvinceById,
  updateProvincia,
  getProvinciasByName,
  getProvinciasEnabled,
} = require("../controllers/provincia");

const {
  createEmpresaInstitucion,
  getEmpresaInstitucionById,
  getEmpresasInstituciones,
  getEmpresasInstitucionesByMunByOrg,
  getEmpresasInstitucionesByName,
  getEmpresasInstitucionesEnabled,
  updateEmpresaInstitucion,
} = require("../controllers/empresasIntituciones");

const {
  getEstados,
  createEstado,
  getEstadoById,
  updateEstado,
  getEstadosEnabled,
} = require("../controllers/estado");

const {
  createMunicipio,
  getMunicipioById,
  getMunicipiosEnabled,
  getMunicipios,
  getMunicipiosByProvincia,
  getMunicipiosByProvinciaEnabled,
  updateMunicipio,
} = require("../controllers/municipio");

const {
  createRol,
  getRolById,
  getRols,
  getRolsEnabled,
  updateRol,
  getRolsByFuncionalidad,
} = require("../controllers/rol");

const {
  //getFuncionalidadesByRol,
  getFuncionalidadById,
  getFuncionalidades,
  getFuncionalidadesEnabled,
  updateFuncionalidad,
  createFuncionalidad,
} = require("../controllers/funcionalidad");

const {
  createUser,
  getUsers,
  updateUser,
  loginUser,
  getUserById,
  getUsersEnabled,
  getUsersByRol,
} = require("../controllers/user");

const {
  createOrganismo,
  getOrganismoById,
  getOrganismos,
  getOrganismosEnabled,
  updateOrganismo,
} = require("../controllers/organismo");

const {
  getTarifas,
  createTarifa,
  getTarifaById,
  updateTarifa,
  getTarifasEnabled,
} = require("../controllers/tarifa");

const {
  createEntidadRegistro,
  getEntidadesRegistro,
  getEntidadesRegistroById,
  getEntidadesRegistroByMun,
  getEntidadesRegistroByMunEnabled,
  getEntidadesRegistroEnabled,
  updateEntidadRegistro,
} = require("../controllers/entidadRegistro");

const {
  createFuncionarioRegistro,
  getFuncionarioRegistroById,
  getFuncionariosRegistro,
  getFuncionariosRegistroByER,
  getFuncionariosRegistroByName,
  getFuncionariosRegistroEnabled,
  updateFuncionarioRegistro,
} = require("../controllers/funcionarioRegistro");

const {
  exportPdf,
  createRepresentante,
  getRepresentanteById,
  getRepresentantes,
  getRepresentantesByEmpInst,
  getRepresentantesByName,
  getRepresentantesEnabled,
  updateRepresentante,
} = require("../controllers/representante");

const { getConditions, writeConditions } = require("../controllers/terms");
const { getPropositos } = require("../controllers/propositos");
const { getFinalidades } = require("../controllers/finalidad");

// provinces routes
router.get("/provincias", getProvinces);
router.get("/provincias/:id", getProvinceById);
router.get("/provincias/enabled/:enabled", getProvinciasEnabled);
router.post("/provincias", createProvince);
router.put("/provincias/:id", updateProvincia);
router.get("/provincias/name/:name", getProvinciasByName);


router.get("/estados", getEstados);
router.get("/estados/:id", getEstadoById);
router.get("/estados/enabled/:enabled", getEstadosEnabled);
router.post("/estados", createEstado);
router.put("/estados/:id", updateEstado);

// Rol Routes
router.get("/rols", getRols);
router.get("/rols/:id", getRolById);
router.get("/rols/enabled/:enabled", getRolsEnabled);
router.post("/rols", createRol);
router.put("/rols/:id", updateRol);
router.get("/funcionalidades/rols/:id", getRolsByFuncionalidad);

//Funcionalidad Routes
router.get("/funcionalidades", getFuncionalidades);
router.post("/funcionalidades", createFuncionalidad);
router.get("/funcionalidades/:id", getFuncionalidadById);
router.get("/funcionalidades/enabled/:enabled", getFuncionalidadesEnabled);
router.put("/funcionalidades/:id", updateFuncionalidad);

// Organismo Routes
router.get("/organismos", getOrganismos);
router.get("/organismos/:id", getOrganismoById);
router.get("/organismos/enabled/:enabled", getOrganismosEnabled);
router.post("/organismos", createOrganismo);
router.put("/organismos/:id", updateOrganismo);

// User Routes
router.get("/users", getUsers);
router.post("/users", createUser);
router.post("/login", httpParser, loginUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.get("/users/enabled/:enabled", getUsersEnabled);
router.get("/users/rol/:id", getUsersByRol);

// Municipio Routes
router.get("/municipios", getMunicipios);
router.get("/municipios/:id", getMunicipioById);
router.get("/municipios/provincia/:id", getMunicipiosByProvincia);
router.get(
  "/municipios/provincia/enabled/:enabled",
  getMunicipiosByProvinciaEnabled
);
router.get("/municipios/enabled/:enabled", getMunicipiosEnabled);
router.post("/municipios", createMunicipio);
router.put("/municipios/:id", updateMunicipio);

router.get("/tarifas", getTarifas);
router.get("/tarifas/:id", getTarifaById);
router.post("/tarifas", createTarifa);
router.put("/tarifas/:id", updateTarifa);
router.get("/tarifas/enabled/:enabled", getTarifasEnabled);

// EmpresaInstitucion Routes
router.get("/empresas-instituciones/", getEmpresasInstituciones);

router.get("/empresas-instituciones/:id", getEmpresaInstitucionById);

router.get("/empresas-instituciones/name/:name", getEmpresasInstitucionesByName);


router.get(
  "/empresas-instituciones/municipio/:id/organismo/:id2",
  getEmpresasInstitucionesByMunByOrg
);


router.get(
  "/empresas-instituciones/enabled/:enabled",
  getEmpresasInstitucionesEnabled
);
router.post("/empresas-instituciones", createEmpresaInstitucion);
router.put("/empresas-instituciones/:id", updateEmpresaInstitucion);

// EntidadRegistro Routes
router.get("/entidades-registro/", getEntidadesRegistro);
router.get("/entidades-registro/:id", getEntidadesRegistroById);
router.get("/entidades-registro/municipio/:id", getEntidadesRegistroByMun);
router.get(
  "/entidades-registro/municipio/enabled/:enabled",
  getEntidadesRegistroByMunEnabled
);
router.get("/entidades-registro/enabled/:enabled", getEntidadesRegistroEnabled);
router.post("/entidades-registro", createEntidadRegistro);
router.put("/entidades-registro/:id", updateEntidadRegistro);

// FuncionarioRegistro Routes
router.get("/funcionarios-registro/", getFuncionariosRegistro);
router.get("/funcionarios-registro/:id", getFuncionarioRegistroById);
router.get("/funcionarios-registro/name/:name", getFuncionariosRegistroByName);
router.get(
  "/funcionarios-registro/entidad-registro/:id/",
  getFuncionariosRegistroByER
);
router.get(
  "/funcionarios-registro/enabled/:enabled",
  getFuncionariosRegistroEnabled
);
router.post("/funcionarios-registro", createFuncionarioRegistro);
router.put("/funcionarios-registro/:id", updateFuncionarioRegistro);

//Representante Routes
router.get("/representantes", getRepresentantes);
router.get("/representantes/:id", getRepresentanteById);
router.get("/representantes/name/:name", getRepresentantesByName);
router.get(
  "/representantes/empresa-institucion/:id",
  getRepresentantesByEmpInst
);
router.get("/representantes/enabled/:enabled", getRepresentantesEnabled);
router.post("/representantes", createRepresentante);
router.put("/representantes/:id", updateRepresentante);
router.get("/representantes/export/:ci", exportPdf);


// Condition Routes
router.get("/condiciones", getConditions);
router.post("/condiciones", writeConditions);

//Proposito Routes
router.get("/propositos", getPropositos);

//Finalidad Routes
router.get("/finalidades", getFinalidades);

module.exports = router;
