import express from "express";
import mongoose from "mongoose";
var cookieParser = require('cookie-parser')
const app = express();
const port = 3001;
require('dotenv').config()

app.use(cookieParser());
const mongodb_uri = process.env.MONGODB_URI;


app.use(express.json());

mongoose.connect(mongodb_uri).then(res => {
  console.log("Connected to DB");
}).catch(err => {
  console.log('At mongoose.connect:')
  console.error(err.message)
});


app.use(express.static('public'))


import userRoutes from "../GRJ/Routes/UserRoute";
app.use('/users',  userRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
