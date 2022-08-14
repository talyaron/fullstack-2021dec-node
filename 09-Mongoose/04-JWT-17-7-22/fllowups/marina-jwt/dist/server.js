"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Connected!");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
let cookieParser = require('cookie-parser');
const app = express_1.default();
const url = process.env.MONGODB_URL;
const port = process.env.PORT || 4007;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookieParser());
const UserRoute_1 = __importDefault(require("./routes/UserRoute"));
app.use('/users', UserRoute_1.default);
const ItemRoute_1 = __importDefault(require("./routes/ItemRoute"));
app.use("/items", ItemRoute_1.default);
mongoose_1.default
    .connect(url)
    .then(() => {
    console.log("Connected to DB");
})
    .catch((error) => {
    console.log('Connection to DB Failed =(');
    console.error(error.message);
});
app.listen(port, () => {
    return console.log(`Express is listening at: ${port}`);
});
