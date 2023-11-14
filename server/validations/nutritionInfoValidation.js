const joi = require('joi');
const nutritionInfoValidation = (req, res, next) => {
    const nutritionValidate = joi.object({
        recipeId: joi.number().required(),
        carbs: joi.number().required(),
        fat: joi.number().required(),
        calories: joi.number().required(),
        protein: joi.number().required()
    })

    const { error } = nutritionValidate.validate(req.body);

    if (error) {
        return res.send(error.details[0].message);
    }

    next();
}
module.exports = nutritionInfoValidation;