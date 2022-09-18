const express = require("express");
const jwt = require("jsonwebtoken");
const { users, rols, funcionalidades } = require("./db.js");
const app = express();
require("dotenv").config();

let rolIdCounter = rols.length;

exports.getRols = (req, res) => {
  const result = rols.map((rol) => rol);
  res.status(200).json({ result, message: "all-items" });
};
exports.createRol = (req, res) => {
  const rol = {
    id: ++rolIdCounter,
    name: req.body.name,
    enabled: true,
  };

  rols.push(rol);

  setTimeout(() => {
    res.status(200).json({ message: "created" });
  }, 500);
};
exports.getRolById = (req, res) => {
  const { id } = req.params;
  const result = rols.find((item) => item.id === parseInt(id));
  res.status(200).json({ result, message: "gotten-by-id" });
};

exports.getRolsEnabled = (req, res) => {
  const { enabled } = req.params;

  //Boolean() works okey!
  const result = rols.filter((item) => item.enabled === Boolean(enabled));
  res.status(200).json({ result, message: "enabled" });
};

exports.updateRol = (req, res, next) => {
  console.log("rol.....");
  const id = parseInt(req.params.id);
  const name = req.body.name;
  const enabled = req.body.enabled;

  const rol = {
    id: id,
    name: name,
    enabled: enabled,
  };
  rols[id - 1] = rol;
  res.status(200).json({ message: "updated" });
};
exports.getRolsByFuncionalidad = async (req, res) => {
  try {
    const rolid = parseInt(req.body.id);
    //this is the rolId
    if (rolid) {
      const user = users.find((user) => user.rolid === rolid);
    }
    //this is the functionality ID.
    //const id = parseInt(req.params.id);
    const result = funcionalidades.find(
      (funct) => funct.id === parseInt(user.rolid)
    );
    res.status(200).json({ result, message: "item-by-funct" });
  } catch (err) {
    return res.status(422).json({ error: "Unprocessable-data" });
  }
};
