"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = 4000;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
mongoose_1.default
    .connect("mongodb+srv://galgross24:aSRzXFlQWeLivtFt@cluster0.e2n3k.mongodb.net/test")
    .then(() => {
    console.log("connect to DB");
})
    .catch((err) => console.error(err));
// const july= new Cat ({name:"july", age:10})
const route_1 = __importDefault(require("./routes/route"));
app.use('/cats', route_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
