const express = require('express');
const userAuthenticate = require('../middleware/userAuthenticate');
const { addRating } = require('../controller/ratingController');

const ratingRoutes = express.Router();
ratingRoutes.post('/rating/add', userAuthenticate, addRating)

module.exports = ratingRoutes