import express from "express"
import * as dotenv from "dotenv"
import userRouter from "./Routes/user.mjs";
// import * as auth from "./auth/auth.mjs"
import cors from "cors";
import * as db from "./db/db.js";
import path from 'path';
import fs from 'fs'
const app = express();
const __dirname=path.resolve()
dotenv.config();
const PORT=process.env.PORT;


app.set('views',path.join(__dirname,'/src/views'))
app.use(express.static('./src/views'));

app.set('view engine','ejs');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/user", userRouter)
app.get('/', function (req, res) {
  // res.sendFile(fs.readFileSync('../views/index.html'))
  return res.render('index')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
})