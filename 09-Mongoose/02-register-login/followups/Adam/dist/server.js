"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
mongoose_1.default
    .connect("mongodb+srv://tal:Fct4jYbHtkSrSnIa@cluster0.0hzknon.mongodb.net/myDataBase?retryWrites=true&w=majority")
    .then(() => {
    console.log("Connected to DB!");
})
    .catch((err) => console.log(err));
app.use(express_1.default.static('public'));
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
app.use('/users', usersRoute_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
