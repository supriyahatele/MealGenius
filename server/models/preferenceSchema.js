const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const preferenceSchema = sequelize.define("preference", {
    preferenceID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
});

module.exports = { preferenceSchema };
