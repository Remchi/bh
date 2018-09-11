const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true} ,
    description: {type:String, required: true},
    license: {type:String, required: true},
    certifications: String,
    date: { type: Date, default: Date.now },
    documentUpload: String

});

module.exports = mongoose.model("CV", resumeSchema);