const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnection');
const { userSchema } = require('./userSchema');
const { restrictionSchema } = require('./restrictionSchema');

const userRestrictionsSchema = sequelize.define("userRestrictions", {
    userRestrictionID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userID: {
        type: DataTypes.INTEGER,
        references: {
            model: userSchema,
            key: 'userID'
        }
    },
    restrictionID: {
        type: DataTypes.INTEGER,
        references: {
            model: restrictionSchema,
            key: 'restrictionID'
        }
    }
}, {
    timestamps: false
});

module.exports = { userRestrictionsSchema };
