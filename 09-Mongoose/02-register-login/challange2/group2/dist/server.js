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
const mongodb_uri = process.env.MONGODB_URI;
app.use(express_1.default.json());
mongoose_1.default
    .connect(mongodb_uri)
    .then(() => {
    console.log("Connected to DB!");
})
    .catch((err) => console.log(err));
app.use(express_1.default.static('public'));
const route_1 = __importDefault(require("./routes/route"));
app.use('/users', route_1.default);
const userRoute_1 = __importDefault(require("./routes/userRoute"));
app.use('/users', userRoute_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
