"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
var cookieParser = require('cookie-parser');
const app = express_1.default();
const port = 3001;
require('dotenv').config();
app.use(cookieParser());
const mongodb_uri = process.env.MONGODB_URI;
app.use(express_1.default.json());
mongoose_1.default.connect(mongodb_uri).then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.log('At mongoose.connect:');
    console.error(err.message);
});
app.use(express_1.default.static('public'));
const UserRoute_1 = __importDefault(require("../GRJ/Routes/UserRoute"));
app.use('/users', UserRoute_1.default);
const ProfileRoute_1 = __importDefault(require("../GRJ/Routes/ProfileRoute"));
app.use('/profile', ProfileRoute_1.default);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
