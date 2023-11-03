const express = require('express');
const { register_user, login_user } = require('../controller/userController');

const userRoutes = express.Router();
userRoutes.post('/users/register', register_user)
userRoutes.post('/users/login', login_user)

module.exports = userRoutes;