const joi = require('joi');

const ratingValidation = (req, res, next) => {
    const ratingValidate = joi.object({
        recipeId: joi.number().required(),
        recipeRating: joi.number().min(1).max(5).required()
    })

    const { error } = ratingValidate.validate(req.body);

    if (error) {
        return res.send(error.details[0].message);
    }

    next();

}

module.exports = ratingValidation;