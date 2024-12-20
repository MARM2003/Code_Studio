const mongoose = require('mongoose');

const userSchema= new  mongoose.Schema({
    username:{
        type:String,
        unquie:true,
    },
    email:{
        type:String,
        unquie:true,
    },
    profile:{
        name:String,
        image:Object,
        profession:String,
        about:String,
        Skill:Object,
        rank:String,
        question:Object,
        answer:Object,
        Thanks:Object,
    },
    password:String,
})


const userDatamodel= mongoose.model("user",userSchema)
module.exports=userDatamodel