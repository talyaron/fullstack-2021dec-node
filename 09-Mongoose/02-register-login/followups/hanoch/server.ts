import express  from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json())
app.use(express.static('public'))

mongoose.connect('mongodb+srv://hanoch:phxoD1XwGzr4NqIq@cluster0.37kenwy.mongodb.net/userDB?retryWrites=true&w=majority')
.then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => console.log(err));
