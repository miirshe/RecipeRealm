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


//endpoint of fetch all comments api

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



// endpoint of single fetch comment api
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



// endpoint of update api
const updateComment = async(req, res) => {
    try {

        const { recipeId, recipeComment } = req.body;
        const id = Number(req.params.id);

        const existComment = await prisma.comments.findUnique({
            where: {
                id: id
            }
        })

        if (!existComment) {
            return res.json({
                status: false,
                message: 'not found this comment'
            })
        }

        const comment = await prisma.comments.update({
            where: {
                id: id
            },
            data: {
                recipeId: recipeId,
                recipeComment: recipeComment
            }
        })

        if (!comment) {
            return res.json({
                status: false,
                message: 'something went wrong'
            })
        }
        res.json({
            status: true,
            message: 'successfully updated comment...'
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
    fetchComment,
    updateComment
}