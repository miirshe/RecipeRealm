const express = require('express');
const { add_recipe } = require('../controller/recipeController');
const userAuthenticate = require('../middleware/userAuthenticate');

const recipeRoutes = express.Router();
recipeRoutes.post('/recipe/add', userAuthenticate, add_recipe)

module.exports = recipeRoutes;