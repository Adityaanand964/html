const express = require('express');
const dotenv =require('dotenv');
const userRouter= require('./Routes/user.mjs')
const cors=require('cors');
const db=require('./db/db')
const path=require('path');
const fs= require('fs');

const app = express();
dotenv.config();
const PORT=process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/users", userRouter)
app.get('/', function (req, res) {
  // res.sendFile(fs.readFileSync('../views/index.html'))
  res.send("Kaha aa gye aap!")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
})