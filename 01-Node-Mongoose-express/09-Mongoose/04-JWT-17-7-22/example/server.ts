import express from "express";
import mongoose from "mongoose";
var cookieParser = require('cookie-parser')
import dotenv from 'dotenv'
const app = express();
app.use(cookieParser());
const port: number | string = process.env.PORT || 3000;
require('dotenv').config()

app.use(express.static("public"));
app.use(express.json());

const mongodb_uri = process.env.MONGODB_URI;


mongoose.connect(mongodb_uri).then(res => {
  console.log("Connected to DB");
}).catch(err => {
  console.log('At mongoose.connect:')
  console.error(err.message)
});


import usersRoute from "./example/routes/userRoute";
app.use("/users", usersRoute);

import productsRouter from './example/routes/productRoute';
app.use('/products', productsRouter)

import ProductModel from './models/productsModel';

// const newProduct = new ProductModel({title:"stam4", ownerId:'123'})
// newProduct.save()


app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
