import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://tal:Fct4jYbHtkSrSnIa@cluster0.0hzknon.mongodb.net/myDataBase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => console.log(err));



app.use(express.static('public'))

import usersRoute from './routes/usersRoute';
app.use('/users', usersRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
