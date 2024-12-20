const express = require("express")
const { handleuser,handleUserSign,handleUpdateProfile,handleUserId } = require("../controllers/user")
const router=express.Router()


router.post("/",handleuser)
router.post("/signup",handleUserSign)
router.post("/updateProfile",handleUpdateProfile)

router.get("/:id",handleUserId)

module.exports=router;
