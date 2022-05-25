"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb+srv://tal1:rbBnTtoiIia3ddKK@tal-test1.m39if.mongodb.net/fs-2021-oct?retryWrites=true&w=majority").then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.log('At mongoose.connect:');
    console.error(err.message);
});
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
app.use("/users", usersRoute_1.default);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
