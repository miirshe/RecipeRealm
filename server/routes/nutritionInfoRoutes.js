const express = require('express');
const { addNutritioninfo, updateNutritioninfo, deleteNutritioninfo, fetchNutritioninfo, fetchNutritioninfos } = require('../controller/nutritionInfoController');
const nutritionInfoValidation = require('../validations/nutritionInfoValidation');
const nutritionInfoRoutes = express.Router();
nutritionInfoRoutes.post('/nutrition/add', nutritionInfoValidation, addNutritioninfo);
nutritionInfoRoutes.put('/nutrition/:id', updateNutritioninfo);
nutritionInfoRoutes.delete('/nutrition/:id', deleteNutritioninfo);
nutritionInfoRoutes.get('/nutrition/:id', fetchNutritioninfo);
nutritionInfoRoutes.get('/nutritions', fetchNutritioninfos);
module.exports = nutritionInfoRoutes