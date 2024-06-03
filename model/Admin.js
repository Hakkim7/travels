const {Model, DataTypes} = require('sequelize');
const sequelize = require('../utilies/db')

class Admin extends Model {}

Admin.init({
    AdminName: {
        type: DataTypes.STRING,
        field: 'admin_name'
    },
    AdminId : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        field: 'adminid',
    },
    password:{
        type: DataTypes.STRING,
        field:'password',
    },
    mobile :{
        type:DataTypes.BIGINT,
        field:'mobile'
    },
    email:{
        type:DataTypes.STRING,
        field:'email',

    },
    isActive: {
        type: DataTypes.BOOLEAN,
        field: 'isactive',
        defaultValue: true,
    },
},
{
    sequelize,
    modelName: 'admin'
});

Admin.sync({alter: true}).then(() => {
    console.log("admin is created");
})

module.exports = Admin;