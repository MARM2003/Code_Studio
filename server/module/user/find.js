const userDatamodel = require("../../model/user")



const userFind=async(username)=>{
    const result =await userDatamodel.findOne({
        username:username
    })
    return result
}
module.exports=userFind