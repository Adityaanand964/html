import pkg from 'mongoose';
import { errorResponse } from '../services/response.mjs';
const { Schema, mongoose, model } = pkg;

const userSchema= new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        enum:{
            values:['Male','Female']
        },
        type: String
    },
    contactNum:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    token:{
        type: String
    }
});

userSchema.pre('save', async function(next){
    if(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(this.email))
    {
        const find_user= await userModel.findOne({email: this.email})
        if(!find_user)
        next();

        else{
            throw new Error("User already exist");
        }
    }

    else{
        throw new Error("Invaild email id");
    }
});


userSchema.pre('save',async function(next){
    if(/^[0]?[789]\d{9}$/.test(this.contactNum))
    {
        const find_user=await userModel.findOne({contactNum: this.contactNum});
        if(!find_user)
        next();

        else{
            throw new Error("User already exist");
        }
    }

    else{
        throw new Error("Invaid Phone Number");
    }
})

const userModel=model("users",userSchema);

export default userModel;