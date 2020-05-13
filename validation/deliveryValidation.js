const Joi = require("joi")

const deliveryValidation = (data) => {
    const schema = {
        F_name: Joi.string().min(4).max(50).trim.required,
        L_name: Joi.string().min(4).max(50).trim.required,
        Address: Joi.string().min(4).max(100).trim.require,
        Post_code: Joi.integer().min(4).max(20).trim.required,
        Phone_num: Joi.integer().min(4).max(20).trim.required,
        Email: Joi.string().min(4).max(100).trim.required
    };
    return Joi.validate(data, schema);
}


module.exports = deliveryValidation;