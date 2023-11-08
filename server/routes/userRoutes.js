const express = require('express');
const { register_user, login_user, fetch_users, fetch_user, remove_user, update_user } = require('../controller/userController');

const userRoutes = express.Router();
userRoutes.post('/user/register', register_user)
userRoutes.post('/user/login', login_user)
userRoutes.get('/users', fetch_users)
userRoutes.get('/user/:id', fetch_user)
userRoutes.delete('/user/:id', remove_user)
userRoutes.put('/user/:id', update_user)

module.exports = userRoutes;