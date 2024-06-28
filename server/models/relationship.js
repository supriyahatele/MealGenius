
// const { preferenceSchema } = require('./preferenceSchema');
// const { userPreferencesSchema } = require('./userPreferencesSchema');
// const { restrictionSchema } = require('./restrictionSchema');
// const { userRestrictionsSchema } = require('./userRestrictionsSchema');
const { preferenceSchema } = require('./preferenceSchema');
const { restrictionSchema } = require('./restrictionSchema');
const { userSchema } = require('./userSchema');

const { userPreferencesSchema } = require('./userPreferenceSchema');
const { userRestrictionsSchema } = require('./userRestrictionSchema');


// Associations
userSchema.belongsToMany(preferenceSchema, { through: userPreferencesSchema, foreignKey: 'userID' });
preferenceSchema.belongsToMany(userSchema, { through: userPreferencesSchema, foreignKey: 'preferenceID' });

userSchema.belongsToMany(restrictionSchema, { through: userRestrictionsSchema, foreignKey: 'userID' });
restrictionSchema.belongsToMany(userSchema, { through: userRestrictionsSchema, foreignKey: 'restrictionID' });

module.exports = {
    userSchema,
    preferenceSchema,
    userPreferencesSchema,
    restrictionSchema,
    userRestrictionsSchema
};
