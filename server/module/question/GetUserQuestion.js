const QuestionDataModel = require("../../model/question")

const GetUserQuestion= async(username)=>{
    console.log(username)
    const res=await QuestionDataModel.find({
        username:username
    })
    return res
    
}

module.exports= GetUserQuestion