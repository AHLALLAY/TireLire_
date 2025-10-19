const express = require('express');
const routes = express.Router();
const authController = require('../Controllers/AuthController');
const authMiddleware = require('../Middlewares/AuthMiddleware');

routes.post(
    '/register', 
    authMiddleware.validateRegister, 
    authController.register
);
routes.post(
    '/login', 
    authMiddleware.validateLogin, 
    authController.login
);


module.exports = routes;