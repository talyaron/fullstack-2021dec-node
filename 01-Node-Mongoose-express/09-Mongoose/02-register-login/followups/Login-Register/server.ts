console.log("Connected!");
import express from "express";
import mongoose from "mongoose";
const app = express();
const port = process.env.PORT || 4006;
require('dotenv').config()
app.use(express.static('public'));
app.use(express.json());

import usersRoutes from "./routes/usersRoute";
app.use('/users', usersRoutes);

const url = process.env.MONGODB_URI;

mongoose.connect(url).then(()=>{
  console.log("Connected to DB!");
}).catch(err=>{
  console.error(err)
});



app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
});

