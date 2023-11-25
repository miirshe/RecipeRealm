const express = require('express');
const { register_user, login_user, fetch_users, fetch_user, remove_user, update_user, current_user } = require('../controller/userController');
const UserValidation = require('../validations/userValidation');
const userAuthenticate = require('../middleware/userAuthenticate');

const userRoutes = express.Router();
userRoutes.post('/user/register', UserValidation, register_user)
userRoutes.post('/user/login', login_user)
userRoutes.get('/users', fetch_users)
userRoutes.get('/user/:id', fetch_user)
userRoutes.get('/user', userAuthenticate, current_user)
userRoutes.delete('/user', userAuthenticate, remove_user)
userRoutes.put('/user', userAuthenticate, update_user)

module.exports = userRoutes;