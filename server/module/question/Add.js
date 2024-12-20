const QuestionDataModel = require("../../model/question");
const AddQuestion = async (username, question) => {
  const { id, title, detail, photo, code, date,tag, codeLanguage } = question;
  console.log(title, detail, photo, code, date,tag, codeLanguage);
  const res = await QuestionDataModel.create({
    username: username,
    question: {
      id: id,
      title: title,
      description: detail,
      photo: photo,
      ErrorCode: code,
      tag:tag,
      language: codeLanguage,
      date: date,
    },
  });
  return res;
};
module.exports = AddQuestion;
