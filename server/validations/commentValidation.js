const joi = require("joi");
const commentValidation = (req, res, next) => {
    const commentValidate = joi.object({
        recipeId: joi.number().required(),
        recipeComment: joi.string().required()
    })

    const { error } = commentValidate.validate(req.body);

    if (error) {
        return res.send(error.details[0].message);
    }

    next();
}

module.exports = commentValidation;