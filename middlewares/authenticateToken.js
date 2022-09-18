const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.protected = (req, res, next) => {
  const token = req.header("jwt");
  if (token == null || token == undefined)
    return res.status(401).json({ message: "not authorized" });
  if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) return res.status(403).json(err.message);
      if(decoded.email) next();   
    });
  }
};
