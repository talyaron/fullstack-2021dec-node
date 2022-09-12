import express from "express";
import mongoose from "mongoose";
const app = express();
const port: number = 4000;

require("dotenv").config();

app.use(express.static("client/build"));
app.use(express.json());

const url = process.env.MONGODB_URI;

mongoose
  .connect(url)
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("At mongoose.connect:");
    console.error(err.message);
  });

  import productsRouter from './API/products/productsRoutes';
  app.use('/api/products', productsRouter) 

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
