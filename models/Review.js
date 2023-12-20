const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Review = sequelize.define('Review', {
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pros: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cons: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Review.sync();

module.exports = Review;
