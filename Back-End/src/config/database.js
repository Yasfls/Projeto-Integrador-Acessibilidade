const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_raizes', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
