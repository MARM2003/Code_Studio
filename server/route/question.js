const express = require('express');
const { handleQuestion,handleAddQuestion,handleQuestionByID,handleAddAnswer, handleUserQuestion, handleUserAnswer } = require('../controllers/question');
const router=express.Router();

router.get("/",handleQuestion);
router.post("/add",handleAddQuestion);

router.get("/:id",handleQuestionByID)
router.post("/addAnswer",handleAddAnswer)
router.get("/userquestion/:username",handleUserQuestion)
router.get("/useranswer/:username",handleUserAnswer)



module.exports=router
