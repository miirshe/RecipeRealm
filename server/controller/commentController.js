const { prisma } = require("../config/config");

// adding comment api
const add_comment = async(req, res) => {
    try {

        const { recipeId, recipeComment } = req.body;
        const userId = req.existUser.id;
        console.log('userId', userId)
        const addcomment = await prisma.comments.create({
            data: {
                recipeId: recipeId,
                recipeComment: recipeComment,
                userId: userId
            }
        })

        if (!addcomment) {

            return res.json({
                status: false,
                message: "something went wrong..."
            })

        } else {

            res.json({
                status: true,
                message: "successfully added comment..."
            })

        }

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}


//fetch all comments api

const fetchComments = async(req, res) => {
    try {

        const fetchComments = await prisma.comments.findMany();
        if (fetchComments.length == []) {

            return res.json({
                status: false,
                message: 'somthing went wrong...'
            })

        } else {

            res.json({
                fetchComments
            })

        }

    } catch (error) {
        res.json({
            status: false,
            message: `${error.message}`
        })
    }
}

const fetchComment = async(req, res) => {
    try {
        const id = Number(req.params.id)
        const Comment = await prisma.comments.findUnique({
            where: {
                id: id
            }
        })

        if (!Comment) {

            return res.json({
                status: false,
                message: 'comment is empty...'
            })

        }

        res.json({
            Comment
        })
    } catch (error) {

        res.json({
            status: false,
            message: `${error.message}`
        })

    }
}

module.exports = {
    add_comment,
    fetchComments,
    fetchComment
}