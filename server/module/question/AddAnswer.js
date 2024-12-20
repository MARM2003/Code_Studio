const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const QuestionDataModel = require("../../model/question");

const addAnswer = async (data) => {
    const { id, username, explain, fixcode, date } = data;

    try {
        // Find the question by ID
        const findQuestion = await QuestionDataModel.findOne({ 'question.id': id });

        if (findQuestion) {
            // Create a new answer object
            const newAnswer = {
                id: uuidv4(),
                username: username,
                date: date,
                explanation: explain,
                code: fixcode,
            };

               console.log(Array.isArray(findQuestion.answer) )
            // Check if answer field exists and is an array
            if (findQuestion.answer && Array.isArray(findQuestion.answer)) {
                // Add the new answer to the existing array
                findQuestion.answer.push(newAnswer);
            } else {
                // Initialize answer field as an array with the new answer
                findQuestion.answer = [newAnswer];
            }

            // // Save the updated document
            const updatedQuestion = await findQuestion.save();
            console.log("Answer added:", updatedQuestion);
            return updatedQuestion
        } else {
            console.log("Question not found");
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = addAnswer;
