const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const restrictionSchema = sequelize.define("restriction", {
    restrictionID: {
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

module.exports = { restrictionSchema };
