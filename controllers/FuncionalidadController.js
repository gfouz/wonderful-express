const express = require('express');
const app = express();
const {rols, funcionalidades } = require("./db.js");
let functionalityIdCounter = funcionalidades.length;
 


 exports.getFuncionalidades = (req, res) => {
    setTimeout(()=>{
    const result = funcionalidades.map(item => item);
    res.status(200).json({message: 'all-items', result});
}, 500);
}

exports.getFuncionalidadById = (req, res) => {
     const {id} = req.params;
     const result = funcionalidades.find(item => item.id === parseInt(id) );
     res.status(200).json({ result, message: "user-by-id" });
 }

 exports.getFuncionalidadesEnabled = (req, res) => {
    const { enabled } = req.params;

    const result = funcionalidades.filter(item => item.enabled === Boolean(enabled) );
         res.status(200).json({ result, message: "user-by-id" });
 }

 exports.updateFuncionalidad = (req, res) => {
    const id = parseInt(req.params.id);
    const name = req.body.name;
    const enabled = req.body.enabled;

    const funcion = {
     id: id,
     name: req.body.name,
     enabled: enabled
   }
  funcionalidades[id - 1] = funcion;
  res.status(200).json({message: 'created'});
}

exports.createFuncionalidad = (req, res, next) => {
   setTimeout(()=>{
    const funcion = {
     id: ++functionalityIdCounter,
     name: req.body.name,
     enabled: true
   }
   funcionalidades.push(funcion);
   res.status(201).json({message: 'created'});
   }, 500)

}
//exports.getFuncionalidadesByRol  = (req, res, next) => {};