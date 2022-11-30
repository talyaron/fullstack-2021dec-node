import express  from "express";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mysql from "mysql"
import { Connection } from "mongoose";
import { triggerAsyncId } from "async_hooks";
require('dotenv').config();

const port = process.env.PORT || 4000;
const app = express();

app.use(express.static("client/build"));
app.use(express.json());
app.use(cookieParser());


export const db =  mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'1421325',
    database:'apartment'
})

db.connect((error)=>{
    try {
        console.info("🔥 MySql is connected 🛢 ")
    } catch (error) {
       console.error(error) 
    }
})


import userRoute from './API/users/userRoute'
import { Client } from "socket.io/dist/client";
app.use('/api/users',userRoute)



app.listen(port,()=>{
    return console.log(`server listen at http://localhost:${port}`)
})