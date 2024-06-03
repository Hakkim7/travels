const User = require('../model/User');
const sequelize = require('../utilies/db');
const {Op} = require('sequelize')
const userController = {
    createUser: async (req, res) => {
        try {
            console.log(req.body.username, req.body.email,"_________");
            await User.create({
                username: req.body.username,
                password: req.body.password,
                mobile: req.body.mobile,
                email: req.body.email
            })
        } catch (err) {
            console.log("error in adding"+err )
        }
        res.status(200).send("successfully add");
    },
    getAllUsers: async(req, res) => {
        let users;
        try{
            users = await User.findAll({where : {isActive: true}});
        } catch(err) {
            console.log("error in get all users"+err);
        }
        res.status(200).send(users);
    },
    getOneUser: async(req, res) => {
        try {
            const usernameOrEmail = req.params.usernameOrEmail;
            console.log("_____"+usernameOrEmail);
            const user = await User.findOne({
                where: { 
                    isActive: true,
                    [Op.or]: [
                        { username: usernameOrEmail },
                        { email: usernameOrEmail }
                    ]
                }
            });
    
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send("User not found");
            }
        } catch (err) {
            console.error("Error in finding user: " + err);
            res.status(500).send("Error in finding user");
        }
    },
    deleteUser: async(req, res) => {
        try {
            const usernameOrEmail = req.params.usernameOrEmail;
            console.log("_____"+usernameOrEmail);
            const user = await User.update({isActive: false},{
                where: { 
                    [Op.or]: [
                        { username: usernameOrEmail },
                        { email: usernameOrEmail }
                    ]
                }
            
            });
            res.status(200).send("deleted successfully");
        } catch (err) {
            console.error("Error in finding user: " + err);
            res.status(500).send("Error in finding user");
        }
    },
    updateUser: async(req, res) => {
        try {
            const userId = req.params.userId;
            console.log("_____"+userId);  
            const [affectedRow, user] = await User.update({
                username: req.body.username,
                email: req.body.email,
                mobile: req.body.mobile,
                password: req.body.password,
                
            }, {
            where: { 
                userId: userId            
            
            },
            returning: true
            })
            if (affectedRow === 0) {
                return res.status(404).send("user not found");
            }
            res.status(200).send(user);


        } catch (err) {
            console.error("Error in finding user: " + err);
            res.status(500).send("Error in update user");
        }
    }
}

module.exports = userController;