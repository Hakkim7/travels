const express = require('express')
const AdminRouter = express.Router();
const AdminController = require('../controller/AdminController');
AdminRouter.post('/add', AdminController.createAdmin)
AdminRouter.get('/get', AdminController.getAllAdmin)
AdminRouter.get('/getOne/:adminnameOrEmail', AdminController.getOneAdmin)
AdminRouter.put('/update/:AdminId', AdminController.updateAdmin)
// AdminRouter.updateAdmin()



module.exports = AdminRouter;


