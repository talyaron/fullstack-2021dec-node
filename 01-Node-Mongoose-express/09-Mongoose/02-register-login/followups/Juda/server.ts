import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Juda:UdM8u2wgkNmTUZxn@cluster1.pge6u.mongodb.net/?retryWrites=true&w=majority"
    
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => console.log(err));



app.use(express.static('public'))

import userRoute from "./routes/userRoute"

app.use('/users', userRoute)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  