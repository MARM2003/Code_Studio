const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    username: String,
    question: {
        id: String,
        title: String,
        description: String,
        photo: Object,
        ErrorCode: String,
        tag:String,
        language: String,
        date: String,
    },
    answer: [{
        id: String,
        username: String,
        date: Date,
        explanation: String,
        code: String,
    }],
});

const QuestionDataModel = mongoose.model('Question', questionSchema);

module.exports = QuestionDataModel;
