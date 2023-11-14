const express = require('express');
const userAuthenticate = require('../middleware/userAuthenticate');
const { add_comment, fetchComments, fetchComment, updateComment, deleteComment } = require('../controller/commentController');
const commentValidation = require('../validations/commentValidation');

const commentRoutes = express.Router();
commentRoutes.post('/comment/add', userAuthenticate, commentValidation, add_comment)
commentRoutes.get('/comments', fetchComments)
commentRoutes.get('/comment/:id', fetchComment)
commentRoutes.put('/comment/:id', updateComment)
commentRoutes.delete('/comment/:id', deleteComment)
module.exports = commentRoutes;