const QuestionDataModel = require("../model/question")
const AddQuestion = require("../module/question/Add");
const addAnswer = require("../module/question/AddAnswer");
const getQuestion = require("../module/question/Get");
const GetUserAnswer = require("../module/question/GetUserAnswer");
const GetUserQuestion = require("../module/question/GetUserQuestion");
const GetbyID = require("../module/question/GetbyID");
const handleQuestion=async(req,res)=>{
    const result = await getQuestion();
    res.status(200).json(result)
    console.log(result)
}
const handleAddQuestion=async(req,res)=>{

    const {username,question}=req.body.QuestionData
    console.log(username,question);
    const result = await AddQuestion(username,question)
    res.status(200).json({status:"Add",result})
}
const handleQuestionByID=async(req,res)=>{
    const {id}=req.params
    const result= await GetbyID(id)
    console.log(result)
    res.status(200).json(result)
}

const handleAddAnswer=async(req,res)=>{
    // console.log(req.body)
    const result=await addAnswer(req.body) ;
    res.json(result)
}

const handleUserQuestion=async(req,res)=>{
    const {username}=req.params
    const result=await GetUserQuestion(username)
    res.json(result)
}
const handleUserAnswer=async(req,res)=>{
    const {username}=req.params
    console.log(username)
    console.log("answer")
    const result=await GetUserAnswer(username)
    res.json(result)
}





module.exports={
    handleQuestion,
    handleAddQuestion,
    handleQuestionByID,
    handleAddAnswer,
    handleUserQuestion,
    handleUserAnswer
}