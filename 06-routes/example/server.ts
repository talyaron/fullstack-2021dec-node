import express from "express";
import mongoose from "mongoose";
const app = express();
const port: number = 3000;

app.use(express.static("public"));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://tal1:rbBnTtoiIia3ddKK@tal-test1.m39if.mongodb.net/fs-2021-oct?retryWrites=true&w=majority"
).then(res=>{
  console.log("Connected to DB");
}).catch(err=>{
  console.log('At mongoose.connect:')
  console.error(err.message)
});


import usersRoute,{x} from "./routes/usersRoute";
app.use("/users", usersRoute);

import {someFunction} from './controlers/usersCont'

console.log(someFunction(3))


app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
