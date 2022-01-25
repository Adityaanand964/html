import express from "express";

export const success=(status,data,message)=>{
    res.send({
        status:status,
        data: data,
        message: message
    })
}