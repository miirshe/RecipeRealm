const { prisma } = require("../config/config");

const addRating = async(req, res) => {
    try {
        const { recipeRating, recipeId } = req.body;
        const userId = req.existUser.id;
        const rating = await prisma.ratings.create({
            data: {
                recipeRating: recipeRating,
                recipeId: recipeId,
                userId: userId
            }
        })

        if (!rating) {

            res.json({
                status: false,
                message: 'rating was not creating...'
            })

        }

        res.json({
            status: true,
            message: 'successfull added rating...'
        })

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}

module.exports = {
    addRating
}