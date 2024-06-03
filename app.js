const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const sequelize = require('./utilies/db')
const User = require('./model/User');
const userRouter = require('./router/UserRouter');
const AdminRouter = require('./router/AdminRouter');
const Admin = require('./model/Admin');
// const bcrypt = require('bcryptjs');
// const jwt = require('.jsonwebstoken');
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/user', userRouter);
app.use('/Admin',AdminRouter);

app.use((req,res,next) => {
    res.status(404).send('<h1>404 page not found</h1>'); 
}) 
dbServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
dbServer();
app.listen(5000);