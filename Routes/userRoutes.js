const express = require('express');
const routes = express.Router();
const userController = require('../Controllers/UserController');

routes.get('/users', userController.displayUsers);


module.exports = routes;