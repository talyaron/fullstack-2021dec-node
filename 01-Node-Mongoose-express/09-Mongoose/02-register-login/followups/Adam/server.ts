import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 4000;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://adamepel11:QIRgOizBQtdX7RCD@cluster0.5ppyiaf.mongodb.net/MyDataBase?retryWrites=true&w=majority" 
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
