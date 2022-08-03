"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const port = 3000;
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
mongoose_1.default.connect('mongodb+srv://hanoch:b2LMpVDUoQRVKqFG@cluster0.37kenwy.mongodb.net/userDB?retryWrites=true&w=majority')
    .then(() => {
    console.log("Connected to DB!");
})
    .catch((err) => console.log(err));
const userRout_1 = __importDefault(require("./routs/userRout"));
app.use('/user', userRout_1.default);
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
