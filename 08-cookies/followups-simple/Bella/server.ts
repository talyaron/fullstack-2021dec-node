import express from "express";
import mongoose from "mongoose";
let cookieParser = require("cookie-parser");
require("dotnev").config();

const app = express();
app.use(cookieParser());

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI).then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.log("Failed to connect to DB")
    console.error(err.message);
});

import clientsRoute from "./routes/clientRoute";
app.use("/clients", clientsRoute);







const port: number | string = process.env.PORT || 3000;

app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`)
})
