const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnection');
const { userSchema } = require('./userSchema');
const { preferenceSchema } = require('./preferenceSchema');

const userPreferencesSchema = sequelize.define("userPreferences", {
    userPreferenceID: {
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
    preferenceID: {
        type: DataTypes.INTEGER,
        references: {
            model: preferenceSchema,
            key: 'preferenceID'
        }
    }
}, {
    timestamps: false
});

module.exports = { userPreferencesSchema };
