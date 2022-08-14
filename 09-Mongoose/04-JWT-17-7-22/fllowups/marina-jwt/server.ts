console.log("Connected!");

import express from "express";
import mongoose from "mongoose";
require('dotenv').config();
let cookieParser = require('cookie-parser');
const app = express();
const url = process.env.MONGODB_URL as string;
const port = process.env.PORT || 4007;
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

import UserRoute from "./routes/UserRoute";
app.use('/users', UserRoute);
import ItemRoute from "./routes/ItemRoute";  
app.use("/items", ItemRoute);

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log('Connection to DB Failed =(');
    console.error(error.message);
  })

app.listen(port, () => {
  return console.log(`Express is listening at: ${port}`);
});

