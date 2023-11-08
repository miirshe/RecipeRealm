const express = require('express');
const userAuthenticate = require('../middleware/userAuthenticate');
const { addRating, fetchRating } = require('../controller/ratingController');

const ratingRoutes = express.Router();
ratingRoutes.post('/rating/add', userAuthenticate, addRating)
ratingRoutes.get('/ratings', fetchRating)

module.exports = ratingRoutes