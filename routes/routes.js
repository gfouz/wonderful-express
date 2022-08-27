const Router = require("express");
const router = Router();
const {protected} = require('../middlewares/authenticateToken.js');
const {httpParser} = require('../middlewares/bodyParser.js');
const {
  getProvinces, 
  createProvince, 
  getProvinceById, 
  updateProvincia,
  getProvinciasEnabled
}  = require("../controllers/ProvinciaController");

const {
  createRol,
  getRolById,
  getRols,
  getRolsEnabled,
  updateRol,
  getRolsByFuncionalidad
}  = require("../controllers/RolController");


const {
  //getFuncionalidadesByRol,
  getFuncionalidadById,
  getFuncionalidades,
  getFuncionalidadesEnabled,
  updateFuncionalidad,
  createFuncionalidad
} = require ("../controllers/FuncionalidadController");

const { 
  createUser, 
  getUsers, 
  updateUser,
  loginUser, 
  getUserById, 
  getUsersEnabled,
  getUsersByRolEnabled 
}  = require("../controllers/UserController");




// provinces routes 
router.get('/provincias', getProvinces);
router.get('/provincias/:id', getProvinceById);
router.get("/provincias/enabled/:enabled", getProvinciasEnabled);
router.post('/provincias', createProvince);
router.put("/provincias/:id", updateProvincia);


// Rol Routes
router.get("/rols", getRols);
router.get("/rols/:id", getRolById);
router.get("/rols/enabled/:enabled", getRolsEnabled);
router.post("/rols", createRol);
router.put("/rols/:id", updateRol);
router.get("/funcionalidades/rols/:id", getRolsByFuncionalidad);



//Funcionalidad Routes
router.get("/funcionalidades", getFuncionalidades);
router.post('/funcionalidades', createFuncionalidad);
router.get("/funcionalidades/:id", getFuncionalidadById);
router.get("/funcionalidades/enabled/:enabled", getFuncionalidadesEnabled);
router.put("/funcionalidades/:id", updateFuncionalidad);




// User Routes
router.get("/users",getUsers);
router.post("/users", createUser);
router.post("/login", httpParser,loginUser);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.get("/users/enabled/:enabled", getUsersEnabled);
router.get("/users/rol/:id/enabled/:enabled", getUsersByRolEnabled);





module.exports = router;

/*
router.get("/users/rol/:id", getUsersByRol);
router.get("/users/rol/:id/enabled/:enabled", getUsersByRolEnabled);
router.get("/logout/:id", logoutUser);
router.put("/users/:id", updateUser);*/


