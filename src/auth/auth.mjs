import jsonwebtoken from "jsonwebtoken";
import express from 'express'
import * as dotenv from 'dotenv';
import { errorResponse, successResponse } from "../services/response.mjs";

dotenv.config();


const authentication = async (req,res,next)=>{
    try{
        // console.log(global.window.localStorage)
    // const authHeader= req.header('auth-header');
    const token= localStorage.getItem('token')
    if(token){
    const data= jsonwebtoken.verify(authHeader, process.env.AUTH0_SECRET_KEY);
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

