"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Connected!");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
const url = process.env.MONGODB_URL;
const app = express_1.default();
const port = process.env.PORT || 3002;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const UserRoute_1 = __importDefault(require("./routes/UserRoute"));
app.use('/users', UserRoute_1.default);
mongoose_1.default
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
