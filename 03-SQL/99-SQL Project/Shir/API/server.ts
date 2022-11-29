import express  from "express";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mysql from 'mysql';
import { Connection } from "mongoose";
import { triggerAsyncId } from "async_hooks";
require('dotenv').config();

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json())
app.use(cookieParser())


const db =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1421325',
    database:'apartment'
})

db.connect((error)=>{
    try {
        console.info('connected to Mysql')
    } catch (error) {
       console.error(error) 
    }
})





app.listen(port,()=>{
    return console.log(`server listen at http://localhost:${port}`)
})