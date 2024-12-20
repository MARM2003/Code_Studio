const userDatamodel = require("../../model/user")

const module_login=async(username,password)=>{
        const findUser = await userDatamodel.findOne({
            $or: [
                { username: username },
                { email: username }
            ]
        })
        if(findUser){
            if(findUser.password===password){
                return {
                    status:"Login",
                    data:findUser
                }
            }else{
                return "wrong Password"
            }
        }else{
            return "username not found"
        }

}
module.exports=module_login