const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('travels', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
  });

  module.exports = sequelize;

