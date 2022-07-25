"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const port = process.env.PORT || 3000;
const app = express_1.default();
app.use(cookie_parser_1.default());
require('dotenv').config();
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const URI = process.env.MONGO_URI;
mongoose_1.default.connect(URI).then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.log('At mongoose.connect:');
    console.error(err.message);
});
const usersRouts_1 = __importDefault(require("./router/usersRouts"));
app.use('/users', usersRouts_1.default);
const eventsRout_1 = __importDefault(require("./router/eventsRout"));
app.use('events', eventsRout_1.default);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
