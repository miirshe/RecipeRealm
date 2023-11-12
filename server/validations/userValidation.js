const joi = require('joi');
const UserValidation = (req, res, next) => {
    const userValidate = joi.object({
        username: joi.string().min(5).max(15).required(),
        email: joi.string().email().required(),
        password: joi.string().min(8).max(15).required()
    })

    const { error } = userValidate.validate(req.body);

    if (error) {
        return res.send(error.details[0].message);
    }
    next();
}

module.exports = UserValidation;