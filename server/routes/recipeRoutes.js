const express = require('express');
const { add_recipe, fetch_recipes, update_recipe, remove_recipe } = require('../controller/recipeController');
const userAuthenticate = require('../middleware/userAuthenticate');
const recipeValiation = require('../validations/recipeValidation');

const recipeRoutes = express.Router();
recipeRoutes.post('/recipe/add', userAuthenticate, recipeValiation, add_recipe)
recipeRoutes.get('/recipes', fetch_recipes)
recipeRoutes.get('/recipe/currentUser', userAuthenticate, fetch_recipes)
recipeRoutes.put('/recipe/:id', userAuthenticate, recipeValiation, update_recipe)
recipeRoutes.delete('/recipe/:id', remove_recipe)

module.exports = recipeRoutes;