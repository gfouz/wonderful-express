const express = require("express");
const app = express();

const { users, rols, funcionalidades, provincias } = require("./db.js");

let provinciaIdCounter = provincias.length;

exports.getProvinces = (req, res, next) => {
  setTimeout(() => {
    const result = provincias.map((item) => item);
    res.status(200).json({ message: "all-items", result });
  }, 500);
};

exports.createProvince = (req, res) => {
  const province = {
    id: ++provinciaIdCounter,
    name: req.body.name,
    enabled: true,
  };
  provincias.push(province);
  res.status(201).json({ message: "created" });
};
//this is okey!
exports.getProvinceById = (req, res, next) => {
  const { id } = req.params;
  const result = provincias.find((item) => item.id === parseInt(id));
  res.status(200).json({ result, message: "gotten-by-id" });
};

exports.getProvinciasEnabled = (req, res) => {
  console.log(`this is url: ${req.url}`);
  const { enabled } = req.params;

  const result = provincias.filter((item) => (item.enabled = true));
  res.status(200).json({ result, message: "enabled" });
};

exports.updateProvincia = (req, res) => {
  const id = parseInt(req.params.id);
  const name = req.body.name;
  const enabled = req.body.enabled;

  const result = {
    id: id,
    name: req.body.name,
    enabled: enabled,
  };
  provincias[id - 1] = result;
  res.status(201).json({ message: "updated" });
};
