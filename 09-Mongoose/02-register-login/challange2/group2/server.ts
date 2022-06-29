import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;
require('dotenv').config()

const mongodb_uri = process.env.MONGODB_URI;

app.use(express.json());

mongoose
  .connect(
    mongodb_uri
    
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => console.log(err));



app.use(express.static('public'))

import usersRoute from './routes/route';
app.use('/users', usersRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
