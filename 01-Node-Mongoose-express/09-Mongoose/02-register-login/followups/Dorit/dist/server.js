"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//bW6nUlcDdX9uUBgR
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = 3028;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
mongoose_1.default
    .connect("mongodb+srv://doritgy:bW6nUlcDdX9uUBgR@cluster0.grzjg.mongodb.net/myDatabase?retryWrites=true&w=majority")
    .then(() => {
    console.log("Connected to DB!");
})
    .catch((err) => console.log(err));
app.use('/users', userRoutes_1.default);
app.listen(port, () => {
    console.log(`register/login app listening on port ${port}`);
});
