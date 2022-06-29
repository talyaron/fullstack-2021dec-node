"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Connected!");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 4006;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
app.use('/users', usersRoute_1.default);
mongoose_1.default.connect("mongodb+srv://tal:AKbbAsrRrMqPCrMX@cluster0.0hzknon.mongodb.net/test?retryWrites=true&w=majority").then(() => {
    console.log("Connected to DB!");
}).catch(err => {
    console.error(err);
});
app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
});
