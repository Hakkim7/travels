const express = require('express')
const AdminRouter = express.Router();
const AdminController = require('../controller/AdminController');

AdminRouter.get('/get', AdminController.createAdmin)

module.exports = AdminRouter;


