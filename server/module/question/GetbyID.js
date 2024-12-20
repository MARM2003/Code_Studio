const QuestionDataModel = require("../../model/question");
const UserDatamodel = require("../../model/user");

const GetById = async (id) => {
    try {
        const question = await QuestionDataModel.findOne({ 'question.id': id });
        if (!question) {
            throw new Error('Question not found');
        }

        const user = await UserDatamodel.findOne({ username: question.username });
        if (!user) {
            throw new Error('User not found');
        }

        // Use Promise.all to handle asynchronous operations within the map
        const answerArr = await Promise.all(question.answer.map(async (ele) => {
            const userProfile = await UserDatamodel.findOne({ username: ele.username });
            return {
                answer: ele,
                userProfile: userProfile,
            };
        }));

        console.log(answerArr);
        
        return {
            question: question,
            user: user,
            answersWithUserProfiles: answerArr,
        };
    } catch (error) {
        console.error('Error fetching question and user:', error);
    }
};

module.exports = GetById;
