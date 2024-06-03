const express = require('express')
const userRouter = express.Router();
const userController = require('../controller/UserController');
userRouter.post('/add', userController.createUser);
userRouter.get('/getAll', userController.getAllUsers)
userRouter.get('/getOne/:usernameOrEmail', userController.getOneUser)
userRouter.delete('/delete/:usernameOrEmail', userController.deleteUser)
userRouter.put('/update/:userId',userController.updateUser)

module.exports = userRouter;