const mongoose = require('mongoose');
const User = require('../models/user');
const JWT = require('jsonwebtoken');

signToken = (user) =>{
    return JWT.sign(        
        {
            iss: "Don",
            sub: user.id,
            iat: new Date().getTime(), //current time
            exp: new Date().setDate(new Date().getDate()+1), //current time + 1 day ahead
            email: user.email,
            userId: user._id
        },
        "Dis here is super sekret"
   
    );
}
module.exports = {

    signUp: async(req, res, next)=>{
        try{
            const { role, name, email, password } = req.value.body;
            //check if the user exists
            const result = await User.findOne({email});

            console.log("The results is", result)
            
            if(result){
                res.status(404).json({
                    message: "The email has been taken"
                });
            }

            //create new user
            const newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                role,
                name,
                email,
                password               
            });

            console.log("The new user is: ",newUser);
            await newUser.save();

            //Generate the token
            const token = signToken(newUser);
            console.log(token);
            //Respond with the token
            res.status(200).json({token});
            
        }catch(error){
            res.status(401).json({
                message: "Authentication failed"
            });
        }
    },

    signIn: async(req, res, next)=>{
        //The signin is handled by passport.js - 
        
       const token = signToken(req.user);
        //console.log(token);

        res.status(200).json({token});
    }
}