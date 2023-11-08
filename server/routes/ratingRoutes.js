const express = require('express');
const userAuthenticate = require('../middleware/userAuthenticate');
const { addRating, fetchRating, fetchRatings } = require('../controller/ratingController');

const ratingRoutes = express.Router();
ratingRoutes.post('/rating/add', userAuthenticate, addRating)
ratingRoutes.get('/ratings', fetchRatings)
ratingRoutes.get('/ratings/:id', fetchRating)

module.exports = ratingRoutes