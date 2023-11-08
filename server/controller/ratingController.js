const { prisma } = require("../config/config");
// endpoint of add rating
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

            return res.json({
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


// endpoint of fetch all rating 

const fetchRating = async(req, res) => {
    try {

        const rating = await prisma.ratings.findMany();

        if (rating.length == []) {
            return res.json({
                status: false,
                message: 'rating is empty...',
            })
        }

        res.json({
            rating
        })

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}

module.exports = {
    addRating,
    fetchRating
}