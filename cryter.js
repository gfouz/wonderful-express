const crypter = require('crypto')
let key = crypter.randomBytes(8).toString('hex')

const SECRECT_KEY ='82dafe73bb12beb28422d466762b374eba715c43ecb850c637e55726b309532d3dfa4d4013c6c075a19c92ffc0bce79b9e87695f9f3cabee245f57d0921daf9b' 

console.log(key)