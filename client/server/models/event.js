const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true} ,
    topic: {type:String, required: true},
    description: {type:String, required: true},
    type: {type:String, required: true},
    date: Date,
    time: Date,
    location: {type: String, required: true},
    eventImage: String,
    

});

module.exports = mongoose.model("Event", eventSchema);