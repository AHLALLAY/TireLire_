const express = require('express');
const routes = express.Router();
const authController = require('../Controllers/AuthController');

routes.post('/register', authController.register);
routes.post('/login', authController.login);


module.exports = routes;