import express from "express";
import mongoose from "mongoose";
import { Server } from "socket.io";
import { createServer } from "http";
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });
const port = 3001;
const cookieParser = require('cookie-parser')
require('dotenv').config()

app.use(cookieParser());
const mongodb_uri = process.env.MONGODB_URI;
app.use(express.json());
app.use(express.static("public"))

mongoose.connect(mongodb_uri).then(res => {
  console.log("Connected to DB");
}).catch(err => {
  console.log('At mongoose.connect:')
  console.error(err.message)
});



io.on('connection',(socket)=>{
  console.log('user connection')
  socket.on('disconnect',()=>{
console.log("user logout")
  })
  socket.on('chat message', (msg)=>{
    console.log(`message:${msg}`)
    io.emit('chat message', msg)
  })
})

app.use(express.static('public'))


import userRoutes from "../GRJ/Routes/UserRoute";
app.use('/users',  userRoutes);

import profileRoutes from "../GRJ/Routes/ProfileRoute";
app.use('/profile',  profileRoutes);

import AppoRoutes from "../GRJ/Routes/AppoRoute";
app.use('/Appo',  AppoRoutes);

httpServer.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});