"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// require("dotenv").config();
// const url = process.env.MONGODB_URL;
const port = 3000;
const app = express_1.default();
app.use(express_1.default.json());
app.use(cookie_parser_1.default());
app.use(express_1.default.static('public'));
mongoose_1.default.connect('mongodb+srv://hanoch:hanoch550@cluster0.37kenwy.mongodb.net/userEx?retryWrites=true&w=majority').then(() => {
    console.log('connect to DB!!');
}).catch(err => {
    console.error(err.message);
});
const clientRout_1 = __importDefault(require("./routs/clientRout"));
app.use('/user', clientRout_1.default);
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
