const QuestionDataModel = require("../../model/question")

const GetUserAnswer= async(username)=>{
    console.log(username)
    const res=await QuestionDataModel.find({
        'answer.username':username
    })
    return res
}

module.exports= GetUserAnswer