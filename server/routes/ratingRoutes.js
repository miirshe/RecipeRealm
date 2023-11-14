const express = require('express');
const userAuthenticate = require('../middleware/userAuthenticate');
const { addRating, fetchRating, fetchRatings, updateRating, deleteRating } = require('../controller/ratingController');
const ratingValidation = require('../validations/ratingValidation');

const ratingRoutes = express.Router();
ratingRoutes.post('/rating/add', userAuthenticate, ratingValidation, addRating)
ratingRoutes.get('/ratings', fetchRatings)
ratingRoutes.get('/rating/:id', fetchRating)
ratingRoutes.put('/rating/:id', updateRating)
ratingRoutes.delete('/rating/:id', deleteRating)

module.exports = ratingRoutes