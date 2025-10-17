const express = require('express');
const routes = express.Router();
const AdminController = require('../Controllers/AdminController');

routes.patch('/:id/kyc-status', AdminController.KYCStatsUpdater);


module.exports = routes;