"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import mongoose from  'mongoose';
// var cookieParser = require('cookie-parser')
// app.use(cookie.parser())
const app = express_1.default();
// @ts-ignore
const port = process.env.PORT || 3000;
require('dotenv').config();
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
// const mongodb_uri = process.env.MONGODB_URI;
// mongoose.connect(mongodb_uri).then(res =>{
//     console.log("connected to DB");
// }).catch(err=>{
//     console.log('at mongoose.connect:')
//     console.error(err.message)
// })
// import usersRoute from "./routes/usersRoute";
// app.use("/users", usersRoute);
// import itemsRoute from "./routes/itemsRoute"
// app.use("/items", itemsRoute);
app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
});
