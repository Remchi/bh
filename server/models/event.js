const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true} ,
    topic: {type:String, required: true},
    description: {type:String, required: true},
    type: {type:String, required: true},
    eventImage: String,
    date: { type: Date, default: Date.now }

});

module.exports = mongoose.model("Event", eventSchema);