console.log("Connected!");
import mongoose from "mongoose";
import express from "express";
require("dotenv").config();
const url = process.env.MONGODB_URL;
const app = express();
var cookieParser = require("cookie-parser");
const port = process.env.PORT || 4002;
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());


import clientRoute from "./routes/clientRoute";
app.use("/client", clientRoute);

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
  console.log(`Express is listening at ${port}`);
});
