const Admin = require('../model/Admin');
const sequelize = require('../utilies/db');
const {OP} = require('sequelize');
const AdminController = {
    createAdmin: async (req, res) => {
        try {
            console.log(req.body.Adminname, req.body.email,"_________");
            await Admin.create({
                adminname: req.body.Adminname,
                password: req.body.password,
                mobile: req.body.mobile,
                email: req.body.email
            })
        } catch (err) {
            console.log("error in adding"+err )
        }
        res.status(200).send("successfully add");
    },
    getAllAdmin: async(req, res) => {
        let Admin;
        try{
            Admin = await Admin.findAll({where : {isActive: true}});
        } catch(err) {
            console.log("error in get all admin"+err);
        }
        res.status(200).send(Admin);
    },
    getOneAdmin: async(req, res) => {
        try {
            const AdminnameOrEmail = req.params.AdminnameOrEmail;
            console.log("_____"+AdminnameOrEmail);
            const user = await User.findOne({
                where: { 
                    isActive: true,
                    [Op.or]: [
                        { Adminname: AdminnameOrEmail },
                        { email: AdminnameOrEmail }
                    ]
                }
            });
    
            if (Admin) {
                res.status(200).json(Admin);
            } else {
                res.status(404).send("admin not found");
            }
        } catch (err) {
            console.error("Error in finding admin: " + err);
            res.status(500).send("Error in finding admin");
        }
    },
    updateAdmin: async(req, res) => {
        try {
            const userId = req.params.AdminId;
            console.log("_____"+AdminId);  
            const [affectedRow, Admin] = await Admin.update({
                Adminname: req.body.Adminname,
                email: req.body.email,
                mobile: req.body.mobile,
                password: req.body.password,
                
            }, {
            where: { 
                AdminId: AdminId            
            
            },
            returning: true
            })
            if (affectedRow === 0) {
                return res.status(404).send("user not found");
            }
            res.status(200).send(Admin);


        } catch (err) {
            console.error("Error in finding Admin: " + err);
            res.status(500).send("Error in update Admin");
        }
    }
    
}

module.exports = AdminController; 

