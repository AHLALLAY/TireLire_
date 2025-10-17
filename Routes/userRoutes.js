const express = require('express');
const routes = express.Router();
const userController = require('../Controllers/UserController');

routes.get('/', userController.displayUsers);
routes.get('/:id', userController.displayUsersById);


module.exports = routes;