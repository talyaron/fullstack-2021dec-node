"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
let cookieParser = require('cookie-parser');
const app = express_1.default();
const port = process.env.PORT || 3000;
require('dotenv').config();
const mongodb_uri = process.env.MONGODB_URI;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookieParser());
mongoose_1.default.connect(mongodb_uri).then(res => {
    console.log("connected to DB");
}).catch(err => {
    console.log('at mongoose.connect:');
    console.error(err.message);
});
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
app.use("/user", usersRoute_1.default);
const validationRoute_1 = __importDefault(require("./routes/validationRoute"));
app.use("/user", validationRoute_1.default);
app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
});
