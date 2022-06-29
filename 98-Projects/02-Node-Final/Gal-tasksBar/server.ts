import express from 'express';
import mongoose from  'mongoose';

let cookieParser = require('cookie-parser')
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()

const mongodb_uri = process.env.MONGODB_URI;


app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(mongodb_uri).then(res =>{
    console.log("connected to DB");
}).catch(err=>{
    console.log('at mongoose.connect:')
    console.error(err.message)
});

import usersRoute from "./routes/usersRoute";
app.use("/user", usersRoute);

import validationRoute from "./routes/validationRoute"
app.use("/user", validationRoute);

app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
  });


  