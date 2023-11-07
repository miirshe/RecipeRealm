const express = require('express');
const userAuthenticate = require('../middleware/userAuthenticate');
const { add_comment, fetchComments, fetchComment, updateComment, deleteComment } = require('../controller/commentController');

const commentRoutes = express.Router();
commentRoutes.post('/comments/add', userAuthenticate, add_comment)
commentRoutes.get('/comments', fetchComments)
commentRoutes.get('/comments/:id', fetchComment)
commentRoutes.put('/comments/:id', updateComment)
commentRoutes.delete('/comments/:id', deleteComment)
module.exports = commentRoutes;