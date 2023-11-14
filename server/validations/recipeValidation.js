const joi = require('joi')

const recipeValiation = (req, res, next) => {
    const recipeValidate = joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        categoryName: joi.string().required(),
        ingredientName: joi.string(),
        cookingInst: joi.string()
    })

    const { error } = recipeValidate.validate(req.body);

    if (error) {
        return res.send(error.details[0].message);
    }

    next();
}
module.exports = recipeValiation;