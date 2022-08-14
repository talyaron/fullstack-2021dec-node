import express from "express";
import mongoose from "mongoose";
var cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json());

const port = process.env.PORT || 3000;
require('dotenv').config()
import dotenv from 'dotenv'

const url = process.env.MONGO_URL as string;
const mongodb_uri = process.env.MONGODB_URI as string;
mongoose.connect(mongodb_uri).then(res => {
  console.log("Connected to DB");
}).catch(err => {
  console.log('At mongoose.connect:')
  console.error(err.message)
});



import clientsRouter from './routes/clientsRoute';
app.use('/clients',clientsRouter);


app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
