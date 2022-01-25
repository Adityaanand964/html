import jsonwebtoken from "jsonwebtoken";
import * as dotenv from 'dotenv';
import { errorResponse, successResponse } from "../services/response.mjs";

dotenv.config();


const authentication = async (req,res,next)=>{
    try{
    const authHeader= req.header('auth-header');
    const data= jsonwebtoken.verify(authHeader, process.env.AUTH0_SECRET_KEY);
    if(data)
    {
    req.userId=data._id;
    next();
    }
    else{
        throw new Error("Invalid login details")
    }
    }
    catch(err){
        return errorResponse(err, res);
    }
}





export default authentication

