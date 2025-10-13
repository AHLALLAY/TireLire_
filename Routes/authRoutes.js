const express = require('express');
const routes = express.Router();
const authController = require('./../Controllers/authController');

routes.post('/register', authController.register);
routes.post('/login', authController.login);


module.exports = Router;