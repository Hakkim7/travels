const {Model, DataTypes, UUID, INTEGER, STRING} = require('sequelize');
const sequelize = require('../utilies/db')

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING,
        field: 'username'
    },
    userId : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        field: 'userid',
    },
    password: {
        type: DataTypes.STRING,
        field: 'password'
    },
    mobile: {
        type: DataTypes.BIGINT,
        field: 'mobile'
    },
    email: {
        type: DataTypes.STRING,
        field: 'email',
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        field: 'isactive',
        defaultValue: true
    },
},
{
    sequelize,
    modelName: 'users'
});

User.sync({alter: true}).then(() => {
    console.log("users is created");
})

module.exports = User;