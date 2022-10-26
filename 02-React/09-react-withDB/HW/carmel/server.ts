import express from "express";
import mongoose from "mongoose";
const app = express();
const port: number = 4000;

require("dotenv").config();

app.use('/*',express.static("client/build"));
app.use(express.json());

const URL = process.env.MONGODB_URI;

mongoose
  .connect(URL)
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("At mongoose.connect:");
    console.error(err.message);
  });

import productRouter from "./API/Products/productRouter"
app.use('/api/products', productRouter)

import userCartRouter from "./API/UsersCarts/userCartRoutes"
app.use('/api/usersCarts', userCartRouter)

import adminsRouter from "./API/Admins/adminRouter"
app.use('/api/admins', adminsRouter)

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});