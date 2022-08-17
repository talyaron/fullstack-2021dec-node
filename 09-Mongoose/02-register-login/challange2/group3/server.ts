import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;
app.use(express.static('public'))
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://@cluster0.ceb2t.mongodb.net/users2?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => console.log(err));



  import userRoute from "./routes/userRoute";
  app.use('/users', userRoute);
  
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  