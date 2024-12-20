const QuestionDataModel = require("../../model/question");
const userDatamodel = require("../../model/user");

const getQuestion = async () => {
  const result = await QuestionDataModel.find();
  const promises = result.map(async (ele) => {
    const userProfile = await userDatamodel.findOne({ username: ele.username });
    return {
      question: ele,
      profile: userProfile,
    };
  });
  const questionData = await Promise.all(promises);
  return questionData;
};
module.exports = getQuestion;
