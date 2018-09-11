const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type:String, required: true},
    description: {type:String, required: true},
    license: {type:String, required: true},
    certifications: String,
    date: { type: Date, default: Date.now },
    postImage: String

});

module.exports = mongoose.model("Post", postSchema);