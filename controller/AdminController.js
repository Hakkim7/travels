const Admin = require('../model/Admin');
const sequelize = require('../utilies/db');
const {OP} = require('sequelize')
const AdminController = {
    createAdmin: async (req, res) => {
        try {
            console.log(req.body.username, req.body.email,"_________");
            await Admin.create({
                adminname: req.body.username,
                password: req.body.password,
                mobile: req.body.mobile,
                email: req.body.email
            })
        } catch (err) {
            console.log("error in adding"+err )
        }
        res.status(200).send("successfully add");
    },
}


module.exports = AdminController; 

