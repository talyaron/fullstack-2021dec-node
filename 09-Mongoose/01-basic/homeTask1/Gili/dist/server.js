"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
mongoose_1.default
    .connect('mongodb+srv://Gili-Admin:rdsdyne6RdSdYnE6@cluster0.7mbcr.mongodb.net/myDB?retryWrites=true&w=majority')
    .then(() => {
    console.log(`connected to DB`);
})
    .catch((err) => console.log(err));
const catsRoute_1 = __importDefault(require("./routes/catsRoute"));
app.use('/cats', catsRoute_1.default);
// const mitzi = new CatModel({name:'mitzi', age:2});
// mitzi.save();
// CatModel.find({age:2}).then(docs=>console.log(docs)).catch(err=>console.log(err))
