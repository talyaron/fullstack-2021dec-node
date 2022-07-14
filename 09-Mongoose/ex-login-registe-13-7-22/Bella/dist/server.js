"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
let cookieParser = require("cookie-parser");
require("dotenv").config();
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const app = express_1.default();
const mongodb_uri = process.env.MONGODB_URI;
const port = process.env.PORT || 3000;
app.use(cookieParser());
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use("/users", userRoute_1.default);
mongoose_1.default.connect(mongodb_uri).then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.log("Failed to connect");
    console.error(err.message);
});
app.listen(port, () => {
    return console.log(`server is listening on port ${port}`);
});
