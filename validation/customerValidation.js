const Joi = require("joi")

const customerValidation = (data) => {
    const schema = {
        F_name: Joi.string().min(4).max(50).trim.required,
        L_name: Joi.string().min(4).max(50).trim.required,
        Email: Joi.string().min(4).max(100).trim.require,
        Phone_num: Joi.integer().min(4).max(20).trim.required,
        Password: Joi.string().min(4).max(8).trim.required,
        Verification_num: Joi.string().min(4).max(10).trim.required
    };
    return Joi.validate(data, schema);
}


module.exports = customerValidation;