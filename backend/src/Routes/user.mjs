const express= require('express');
const userControl=require('../Controllers/userController.mjs')

const userRouter = express.Router()

userRouter.post("/register",userControl.userdata);
// userRouter.post("/post",function(req,res){
//     res.send("post done")
// })

userRouter.post("/login",userControl.login)
export default userRouter;