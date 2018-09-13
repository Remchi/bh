const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    role:{type: String,
         enum: ['employer','jobseeker'],
         required: true
    },
    name:String,   
    
    email:{
        type: String, 
        required: true, 
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    }, 
    password: {
        type:String, required: true
    }
    
    

});

//this method gets called before the mongoose save method on object User
userSchema.pre('save', async function(next){
    try{
        console.log("The user is here...");
        
        //create salt
        const salt = await bcrypt.genSalt(10);
        //use bcrypt hash

        const passwordHash = await bcrypt.hash(this.password, salt);

        this.password = passwordHash;

        next();
    }catch(error){
        next(error);
    }
});
//this method is used to verify the password user 
userSchema.methods.validPassword = async function(newPassword){
    try{
        //find the user using email provided
        return await bcrypt.compare(newPassword, this.password);
        //use the bcrypt compare method
    }catch(error){
        throw new Error(error);
    }
}

module.exports = mongoose.model('User', userSchema);