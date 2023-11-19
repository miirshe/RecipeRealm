const joi = require('joi');
const userProfileValidation = (req, res, next) => {
    const userProfileValidate = joi.object({
        firstName: joi.string(),
        lastName: joi.string(),
        bio: joi.string(),
        avatar: joi.string(),
        facebookLink: joi.string(),
        youtubeLink: joi.string(),
        twitterLink: joi.string(),
        githubLink: joi.string(),
    })

    const { error } = userProfileValidate.validate(req.body);

    if (error) {
        return res.send(error.details[0].message);
    }

    next();
}

module.exports = userProfileValidation;