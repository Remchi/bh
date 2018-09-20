const mongoose = require('mongoose');

const QuestionSchema =  mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    answer: {type: Number, required: true},
    choices: {type: Array, required: true},
    question: {type: String, required: true},
    rationale: {type: String, required: true}
});

module.exports = mongoose.model("Question", QuestionSchema);