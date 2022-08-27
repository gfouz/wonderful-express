require("dotenv").config();
const { USERS } = require('./users.js');
const jwt = require("jsonwebtoken");

exports.isToken = (jwttoken) => {
  if (jwttoken) {
     const { userId } = jwt.verify(jwttoken, process.env.TOKEN_SECRET);
      try {
          USERS.some(user => user.id === userId) ? true : false;
        
        } catch (err) {
          console.log(err);
        }
  }

}