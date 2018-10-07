const mongoose = require('mongoose');
const passport = require('passport');
const JwtStrategy =  require('passport-jwt').Strategy;
const {ExtractJwt} = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const User = require("./models/user");


//JSON WEB TOKENS STRATEGY

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey:"Dis here is super sekret"
},  async(payload, done)=>{
    try{
        //find the user specified in the token
        const user = await User.findById(payload.sub);

        //if the user doesn't exist, return empty object and false 
        if(!user){
            return done(null, false);            
        }

        //Otherwise, return the user
        done(null, user);

    }catch(error){
        done(error, false);
    }
}));


//LOCAL STRATEGY - to log in users

passport.use(new LocalStrategy({
    usernameField: "email"
}, async(email, password, done )=>{
    try{
        //Find the user given the email
        const user = await User.findOne({email});

        //If not user, handle it
        if(!user){
            return done(null, false);
        }

        //Check if the password is a match
        const isMatch = await user.validPassword(password);

        //If not user, inform user
        if(!isMatch) return done(null, false);

        //Otherwise, return the user
        done(null, user);
    }catch(error){
        done(error, false);
    }
}));