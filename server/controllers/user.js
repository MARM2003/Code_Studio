const UpdateProfile = require("../module/user/UpdateProfile");
const userFind = require("../module/user/find");
const module_login = require("../module/user/login");
const module_Register = require("../module/user/register");

const handleuser=async(req,res)=>{
    console.log("handleUser")
   const { username, password}=req.body
   console.log(req.body)
   const result = await module_login(username,password)
   res.status(200).json(result)
    
}
const handleUserSign=async(req,res)=>{
    console.log(req.body)
    const {UserName,email,password}=req.body;
    const register= await module_Register(UserName,email,password)
    res.status(200).json(register)
}


const handleUpdateProfile=async(req,res)=>{
    const {username,name,profession,about,keyword,image}=req.body
    // console.log(username,Name,Profession,About,Keyword,image)
    console.log(req.body)
    const response=await UpdateProfile(username,name,profession,about,keyword,image)
    res.status(200).json(response)
}

const handleUserId=async(req,res)=>{
    const {id}=req.params
    const result=await userFind(id)
    res.status(200).json({result})

}
module.exports={
    handleuser,
    handleUserSign,
    handleUpdateProfile,
    handleUserId
}
