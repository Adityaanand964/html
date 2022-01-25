import express from "express"
import jsonwebtoken from "jsonwebtoken";
import userModel from "../Models/usersSchema.mjs";
import { successResponse, errorResponse } from "../services/response.mjs";
import * as bcrypt from "bcrypt"
// import bodyParser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config();


export const addPost= async (req,res)=>{
    try{
        const i=i+1;
        return successResponse(i, "Post added",res);
    }
    catch(err)
    {
        return errorResponse(err, res);
    }
}