import express from "express";
import mongoose from "mongoose";
var cookieParser = require("cookie-parser");
import dotenv from "dotenv";
const app = express();
app.use(cookieParser());
const port: number | string = process.env.PORT || 3000;
require("dotenv").config();

app.use(express.static("public"));
app.use(express.json());

const mongodb_uri = process.env.MONGODB_URI;

if (mongodb_uri) {
  mongoose
    .connect(mongodb_uri)
    .then((res) => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("At mongoose.connect:");
      console.error(err.message);
    });
} else{
  console.log('No mongodb uri')
}

import usersRoute from "./routes/userRoute";

const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io")
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('user connection')
  socket.on('disconnect', () => {
    console.log('a user disconnected')
  })
  socket.on('chat message', (msg) => {
    console.log(`message:${msg}`)
    io.emit('chat message', msg)
  })
})

server.listen(3000, () => {
  console.log('listening on port 3000')
})