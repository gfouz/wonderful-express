const express = require("express");
const bcrypt = require("bcrypt");
const UUID = require("uuidjs");
const jwt = require("jsonwebtoken");
const app = express();
require("dotenv").config();
const { users, rols, funcionalidades } = require("./db.js");

exports.getUsers = (req, res, next) => {
  const result = users.map((user) => user);
  res.status(200).json({ message: "all-items", result });
};

exports.createUser = async (req, res, next) => {
  const { email, password, rolid } = req.body;

  const isEmailExist = users.find((user) => user.email === email);

  if (isEmailExist) {
    return res.status(400).json({ error: "bad-request" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);

  const user = {
    id: UUID.generate(),
    email: email,
    password: hashedpassword,
    enabled: true,
    rolId: rolid,
  };
  users.push(user);

  setTimeout(() => {
    res.status(201).json({ message: "created" });
  }, 1000);
};
//this is okey!
exports.getUserById = (req, res) => {
  console.log(req.hostname);
  const { id } = req.params;
  const result = users.find((user) => user.id === parseInt(id));
  res.status(200).json({ result, message: "gotten-by-id" });
};

exports.getUsersEnabled = (req, res, next) => {
  
  const { enabled } = req.params;
  const result = users.filter((user) => (user.enabled = true));
  res.status(200).json({ message: "enabled", result });
};

exports.updateUser = async (req, res) => {
  console.log(`this is url: ${req.url}`);
  const id = parseInt(req.params.id);
  const email = req.body.email;
  const password = req.body.password;
  const enabled = req.body.enabled;
  const rolId = req.body.rolId;

  const user = {
    id: id,
    email: email,
    password: password,
    enabled: enabled,
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

      res.status(202).json({ signature: token, message: "accepted" });
    } else {
      return res.status(401).json({ error: "not-authorized" });
    }
  } catch (err) {
    res.status(422).json({ error: "unprocessable" });
  }
};

//exports.logoutUser = (req, res, next) => {};

exports.getUsersByRolEnabled = (req, res, next) => {
  const rolId = parseInt(req.params.id);
  const enabled = req.params.enabled;
  const data = users.find(
    (user) => user.rolId === rolId && user.enabled === Boolean(enabled)
  );

  res.status(200).json({ result, message: "gotten-by-another" });
};

// $2b$10$cuM/dhSYL5d4g11xajb1Oufnu5f0LPiOZNRElaX694c0TbCWwI3LG
