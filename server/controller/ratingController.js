const { prisma } = require("../config/config");
// endpoint of add rating
const addRating = async(req, res) => {
    try {
        const { recipeRating, recipeId } = req.body;
        const userId = req.existUser.id;
        const rating = await prisma.rating.create({
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

const fetchRatings = async(req, res) => {
    try {

        const rating = await prisma.rating.findMany();

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


//endpoint of fetch single recipe of ratings

const fetchRating = async(req, res) => {
    try {
        const recipeId = Number(req.params.id);
        const rating = await prisma.rating.findMany({
            where: {
                recipeId: recipeId
            }
        });

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


// endpoint update of rating

const updateRating = async(req, res) => {
    try {

        const { recipeRating } = req.body;
        const id = Number(req.params.id);

        const existRating = await prisma.rating.findUnique({
            where: {
                id: id
            }
        })

        if (!existRating) {
            return res.json({
                status: false,
                message: 'rating not found...'
            })
        }

        const rating = await prisma.rating.update({
            where: {
                id: id
            },
            data: {
                recipeRating: recipeRating
            }
        })

        if (!rating) {
            return res.json({
                status: false,
                message: 'rating not update...'
            })
        }

        res.json({
            status: true,
            message: 'successfully rating update...'
        })

    } catch (error) {

        res.json({
            status: false,
            message: `${error.message}`
        })

    }
}


// endpoint of rating delete

const deleteRating = async(req, res) => {
    try {

        const id = Number(req.params.id);
        const existRating = await prisma.rating.findUnique({
            where: {
                id: id
            }
        })

        if (!existRating) {
            return res.json({
                status: false,
                message: 'rating not found...'
            })
        }

        const rating = await prisma.rating.delete({
            where: {
                id: id
            }
        })

        if (!rating) {
            return res.json({
                status: false,
                message: 'rating not delete...'
            })
        }

        res.json({
            status: true,
            message: 'successfully rating delete...'
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
    fetchRatings,
    fetchRating,
    updateRating,
    deleteRating
}