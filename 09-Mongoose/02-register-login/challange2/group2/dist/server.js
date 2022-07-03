"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = 3001;
require('dotenv').config();
// const mongodb_uri = process.env.MONGODB_URI;
app.use(express_1.default.json());
mongoose_1.default
    .connect("mongodb+srv://Bella:xFS7EsTQz8Frw7UL@cluster0.ceb2t.mongodb.net/?retryWrites=true&w=majority")
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
app.use(express_1.default.static('public'));
// import route from "./routes/route";  
// app.use('/users', route);
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
app.use('/users', userRoutes_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
