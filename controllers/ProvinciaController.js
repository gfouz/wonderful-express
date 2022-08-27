const express = require('express');
const app = express();

const { users, rols, funcionalidades } = require("./db.js");

 const PROVINCIAS = [
{
    id: 1,
    name:  'Mayabeque',
    enabled: false
},
{
    id: 2,
    name:  'Habana',
    enabled: true
}
];   

let provinciaIdCounter = PROVINCIAS.length;
 


 exports.getProvinces = (req, res, next) => {

    setTimeout(()=>{
    const result = PROVINCIAS.map(item => item);
    res.status(200).json({message:"all-items", result});
}, 500);
}


 exports.createProvince = (req, res) => {

     
     const province = {
     id: ++provinciaIdCounter,
     name: req.body.name,
     enabled: true
   }
   PROVINCIAS.push(province);
   res.status(201).json({ message: "created" });

}
 //this is okey!
 exports.getProvinceById = (req, res, next) => {
     const {id} = req.params;
     const result = PROVINCIAS.find(item => item.id === parseInt(id) );
     res.status(200).json({ result, message: "user-by-id" });
 }

 exports.getProvinciasEnabled = (req, res, next) => {
    const { enabled } = req.params;

    const result = PROVINCIAS.filter(item => item.enabled === Boolean(enabled) );
        res.status(200).json({ result, message: "enabled" });
 }

exports.updateProvincia = (req, res) => {
    console.log(`this is url: ${req.url}`);
    const id = parseInt(req.params.id);
    const name = req.body.name;
    const enabled = req.body.enabled;

    const result = {
     id: id,
     name: req.body.name,
     enabled: enabled
   }
  PROVINCIAS[id - 1] = result;
  res.status(201).json({message: 'updated'});
}
    





