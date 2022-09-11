console.log("Connected!");
import express from "express";
import mongoose from "mongoose";
require("dotenv").config();
const url = process.env.MONGODB_URL as string;
const app = express();
const port = process.env.PORT || 4004;
app.use(express.static("client/build"));
app.use(express.json());


import productsRoutes from './API/products/productsRoutes';
app.use("/products", productsRoutes);

mongoose
  .connect(url)    
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("Failed to connect to DB:");
    console.log(err.message);
  });

app.listen(port, () => {
  console.log(
    `Server listening on http://localhost:${port}/`
  );
});
