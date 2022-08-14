"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
var cookieParser = require('cookie-parser');
const app = express_1.default();
app.use(cookieParser());
const port = process.env.PORT || 3000;
require('dotenv').config();
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const mongodb_uri = process.env.MONGODB_URI;
mongoose_1.default.connect(mongodb_uri).then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.log('At mongoose.connect:');
    console.error(err.message);
});
const clientsRoute_1 = __importDefault(require("./routes/clientsRoute"));
app.use('/clients', clientsRoute_1.default);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
