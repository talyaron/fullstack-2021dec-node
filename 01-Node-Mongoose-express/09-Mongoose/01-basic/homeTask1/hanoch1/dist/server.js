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
app.use(express_1.default.static('public'));
mongoose_1.default.connect('mongodb+srv://hanoch:Nn6nTMlgtbG6ea6f@cluster0.37kenwy.mongodb.net/cats2?retryWrites=true&w=majority')
    .then(() => {
    console.log("connect to DB");
}).catch((err) => console.log(err));
const catsRout_1 = __importDefault(require("./routs/catsRout"));
app.use('/cat', catsRout_1.default);
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
