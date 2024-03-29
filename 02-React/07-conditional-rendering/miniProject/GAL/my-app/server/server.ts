import express from "express";
import mongoose from "mongoose";
const app = express();
const port: number = 4000;

app.use(express.static("client/build"));
app.use(express.json());

// mongoose.connect(
//   "mongodb+srv://galgross24:<6WebW-6P2sW7tTa>@cluster0.e2n3k.mongodb.net/?retryWrites=true&w=majority"
// ).then(res=>{
//   console.log("Connected to DB");
// }).catch(err=>{
//   console.log('At mongoose.connect:')
//   console.error(err.message)
// });

app.get('/api/test',(req, res)=>{
  res.send({ok:true})
})

import usersRoute,{x} from "./routes/usersRoute";
app.use("/users", usersRoute);

import {someFunction} from "../server/cont/userCont"

console.log(someFunction(3))


app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
