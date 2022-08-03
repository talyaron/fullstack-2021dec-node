import express from "express";
import mongoose from "mongoose";
let cookieParser = require("cookie-parser");
import dotenv from "dotenv";
require("dotenv").config();
import userRoute from "./routes/userRoute";

const app = express();
const mongodb_uri = process.env.MONGODB_URI;
const port : number | string = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json());
app.use("/users", userRoute);

mongoose
    .connect(mongodb_uri)
    .then(res => {
        console.log("Connected to DB");
    })
    .catch(err => {
        console.log("Failed to connect");
        console.error(err.message);
    });

app.listen(port, () => {
    return console.log(`server is listening on port ${port}`);
});
