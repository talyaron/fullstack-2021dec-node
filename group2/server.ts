import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 3001;
require('dotenv').config()

// const mongodb_uri = process.env.MONGODB_URI;


app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Bella:xFS7EsTQz8Frw7UL@cluster0.ceb2t.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => console.log(err));

// mongoose
//   .connect(
//     mongodb_uri
    
//   )
//   .then(() => {
//     console.log("Connected to DB!");
//   })
//   .catch((err) => console.log(err));



app.use(express.static('public'))

// import route from "./routes/route";  
// app.use('/users', route);

import userRoutes from "./routes/userRoutes";
app.use('/users',  userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
