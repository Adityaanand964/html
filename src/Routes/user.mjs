import express from "express"
import * as userControl from "../Controllers/userController.mjs";

const userRouter = express.Router()

userRouter.post("/register",userControl.userdata);
// userRouter.post("/post",function(req,res){
//     res.send("post done")
// })

userRouter.get('/register', (req,res)=>{
    return res.render('register');
})

userRouter.post("/login",userControl.login)
export default userRouter;