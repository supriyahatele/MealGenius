require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const { userSchema } = require('../models/userSchema');
const { preferenceSchema, restrictionSchema } = require('../models/relationship');


const createUser = async (req, res) => {
    const { username, email, password, age, gender, healthGoals, cookingSkills, height, weight, preferences, restrictions } = req.body;
    const saltRounds = 10;

    try {
        // Check if all required fields are present
        if (!username || !email || !password || !age || !gender) {
            return res.status(400).json({ error: true, message: 'Missing required fields' });
        }

        // Check for an existing user with the same email
        const existingUser = await userSchema.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: true, message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create the user
        const userCreated = await userSchema.create({
            username,
            email,
            age,
            gender,
            healthGoals,
            cookingSkills,
            height,
            weight,
            password: hashedPassword
        });

        // Associate preferences if provided
        if (preferences && preferences.length > 0) {
            const preferencesToAdd = await preferenceSchema.findAll({
                where: {
                    preferenceID: preferences
                }
            });
            await userCreated.addPreferences(preferencesToAdd);
        }

        // Associate restrictions if provided
        if (restrictions && restrictions.length > 0) {
            const restrictionsToAdd = await restrictionSchema.findAll({
                where: {
                    restrictionID: restrictions
                }
            });
            await userCreated.addRestrictions(restrictionsToAdd);
        }

        // Send response with created user data
        console.log(userCreated);
        return res.status(201).send({ error: false, data: userCreated });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send({ error: true, message: error.message });
    }
};

module.exports = { createUser };


const login=async (req,res)=>{
    const{ email,password}=req.body
    try{
        const checkUser=await userSchema.findOne({where: {email:email}})
       if(!checkUser)  {
        return res.status(404).send({message: "User not found"}) ;
       }
       const match = await bcrypt.compare(password, checkUser.password);

    if(!match) {
        return res.status(404).send({message: "credential not matched"}) ;
    }

        let token = jwt.sign(
            {
                userId: checkUser.id,
            },
            process.env.SECRETKEY,
            { expiresIn: '24h' }

        );
        return res.status(200).send({message: "User login Successfully", data: {token:token,username:checkUser.username} });

    }catch(e){
       res.status(500).send({ error:true,message: e.message});
    }
}




module.exports ={createUser,login}
