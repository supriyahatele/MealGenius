const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnection');

const userSchema = sequelize.define("user", {
    userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    healthGoals: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    cookingSkills: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: true,
    }
},{
    timestamps: false
})
module.exports = { userSchema }