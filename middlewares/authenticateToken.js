const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.isAuth = (req, res, next) => {
  const token = req.header('jwt');
  if (token == null) return res.status(401).json({ error: "not authorized" });
  if(token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json(err.message);
    if (decoded.email) next();
  })
  }
}