import { Request, Response } from 'express';
import express from 'express';
import {USERS_DB} from '../db.js'
const config = require('../config/config')
const app = express();
app.set('llave', config.llave);
const jwt = require('jsonwebtoken');


let usersArray = USERS_DB.map(users=> users);
let userIdCounter = usersArray.length;

export const getToken = async (req: Request, res: Response, next: any) => {

     if(req.body.user === 'gfouz' && req.body.password === 'gfouz123') {
      const payload = {
       check:  true
  };
  const token = jwt.sign(payload, app.get('llave'), {
   expiresIn: 1440
  });
  res.json({
   mensaje: 'Autenticación correcta',
   token: token
  });
    } else {
        res.json({ mensaje: 'Usuario o contraseña incorrectos'})
    }
  
};

export const welcome = async (req: Request, res: Response) => {

        res.send('<h1>Welcome to homepage</h1>');
}


export const getAllUsers = (req: Request, res: Response, next: any) => {
    const data = USERS_DB.map(users => users);
    res.send(data);
}

export const getUserById = (req: Request, res: Response, next: any) => {
     const {id} = req.params;
     const data = USERS_DB.find(users => users.id === id );
     const user = {...data};
     res.send(user);
} 
export const createUser = (req: Request, res: Response, next: any) => {
   const user: any = {
     id: ++userIdCounter,
     name: req.body.name
   }
   usersArray.push(user);
   
   res.send(usersArray)
   
}

exports.loginUser = (req, res, next) => {
     
}

//ece480d1-3589-4056-8e0c-30bd9d2f2f2f