import express from "express";
import mongoose from "mongoose";
let cookieParser = require("cookie-parser");
import dotenv from "dotenv";
require("dotenv").config()

const app = express();
app.use(cookieParser());
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI) {
    mongoose
        .connect(MONGODB_URI)
        .then((res) => {
            console.log("Connected to DB");
        })
        .catch((err) => {
            console.log("Failed to connect")
            console.log(err.message);
        });
} else {
    console.log("No MongoDB URI specified");
};

//userRoutes and stockRoutes
import userRoute from "./routes/userRoute";
app.use("/users", userRoute);


app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});