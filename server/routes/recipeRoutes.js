const express = require('express');
const { add_recipe, fetch_recipes } = require('../controller/recipeController');
const userAuthenticate = require('../middleware/userAuthenticate');

const recipeRoutes = express.Router();
recipeRoutes.post('/recipes/add', userAuthenticate, add_recipe)
recipeRoutes.get('/recipes', fetch_recipes)

module.exports = recipeRoutes;