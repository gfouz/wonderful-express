const express = require("express");
const bcrypt = require("bcrypt");
const UUID = require("uuidjs");
const jwt = require("jsonwebtoken");
const app = express();
require("dotenv").config();
const { users, rols, funcionalidades, empresasInstituciones } = require("./db.js");

let userId = users.length;

exports.getUsers = (req, res, next) => {
  const result = users.map((user) => user);
  res.status(200).json({ message: "all-items", result });
};

exports.createUser = async (req, res, next) => {
  
  const { email, password, rolId } = req.body;
  const isEmailExist = users.some((user) => user.email === email);

  if (!isEmailExist) {
    
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);

  const user = {
    id: ++userId,
    email: email,
    password: hashedpassword,
    enabled: true,
    rolId: rolId,
  };
  users.push(user);
  res.status(201).json({ message: "created" });
  
} else {
  res.status(400).json({ message: "bad-request" });
}
};
//this is okey!
exports.getUserById = (req, res) => {
  const { id } = req.params;
  const result = users.find((user) => user.id === parseInt(id));
  res.status(200).json({ result, message: "gotten-by-id" });
};

exports.getUsersEnabled = (req, res) => {
  const result = users.filter(item => item.enabled === true );
  res.status(200).json({result, message: "enabled"});
};

exports.updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const email = req.body.email;
  const password = req.body.password;
  const enabled = req.body.enabled;
  const rolId = req.body.rolId;

  const user = {
    id: id,
    email: email,
    password: password,
    enabled: Boolean(enabled),
    rolId: rolId,
  };

  users[id - 1] = user;
  setTimeout(() => {
    res.status(201).json({ message: "updated" });
  }, 500);
};

//exports.getUsersByRol = (req, res) => {};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await users.find((user) => user.email === req.body?.email);
    if (
      (!email && !password) ||
      (email !== user.email && password !== user.password)
    ) {
      return res.status(400).json({ error: "bad-request" });
    }

    if (
      user &&
      (await bcrypt.compare(password, user.password)) &&
      user.enabled
    ) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res.status(202).json({ jwt: token, message: "accepted" });
    } else {
      return res.status(401).json({ message: "not-authorized" });
    }
  } catch (err) {
    res.status(422).json({ error: "unprocessable"});
  }
};

//exports.logoutUser = (req, res, next) => {};

// this is very bad
exports.getUsersByRolEnabled = (req, res, next) => {
  const rolId = parseInt(req.params.id);
  const enabled = req.params.enabled;
  const data = users.find(
    (user) => user.rolId === rolId && user.enabled === Boolean(enabled)
  );

  res.status(200).json({ result, message: "gotten-by-another" });
};

// $2b$10$cuM/dhSYL5d4g11xajb1Oufnu5f0LPiOZNRElaX694c0TbCWwI3LG
