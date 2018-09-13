const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true} ,
    title: {type:String, required: true},
    description: {type:String, required: true},
    license: {type:String, required: true},
    certifications: String,    
   // postImage: String,
    postImage: { data: Buffer, contentType: String },
    date: { type: Date, default: Date.now }

});

module.exports = mongoose.model("Post", postSchema);