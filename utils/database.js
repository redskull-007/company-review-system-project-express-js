const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('company_reviews', 'root', 'abhi@mysql100', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
