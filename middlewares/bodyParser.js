 const Joi = require('joi');

 exports.httpParser = (req, res, next) => {
    // create schema object
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
     // role: Joi.string().valid('Admin', 'User').required()
    });

    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };

    const { error, value } = schema.validate(req.body, options);
    
    if (error) {
        return res.status(422).json({ error:"Unprocessable-data"});

    } else {
        req.body = value;
        next();
    }
}