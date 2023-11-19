const express = require('express');
const { addUserProfile, updateUserProfile, deleteUserProfile, fetchUserProfile, fetchUsersProfile } = require('../controller/userProfileController');
const userProfileValidation = require('../validations/userProfileValidation');
const userAuthenticate = require('../middleware/userAuthenticate');

const userProfileRoutes = express.Router();
userProfileRoutes.post('/userProfile/add', userAuthenticate, userProfileValidation, addUserProfile);
userProfileRoutes.put('/userProfile/:id', userProfileValidation, updateUserProfile);
userProfileRoutes.delete('/userProfile/:id', deleteUserProfile);
userProfileRoutes.get('/userProfile/:id', fetchUserProfile);
userProfileRoutes.get('/usersProfile', fetchUsersProfile);
module.exports = userProfileRoutes;