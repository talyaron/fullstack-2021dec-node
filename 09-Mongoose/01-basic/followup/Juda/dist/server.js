"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = 3000;
mongoose_1.default.connect('mongodb+srv://Juda:UdM8u2wgkNmTUZxn@cluster1.pge6u.mongodb.net/catsStore?retryWrites=true&w=majority')
    .then(() => { console.log('connected to DB'); })
    .catch(err => console.log(err));
const CatSchema = new mongoose_1.default.Schema({
    name: String,
    age: Number,
    owner: String,
    color: String,
    sex: String
});
// Model = collection
const CatModel = mongoose_1.default.model('cats', CatSchema);
const mitsi = new CatModel({
    name: 'Putsi',
    age: 1,
    sex: 'Female',
    owner: 'Jg',
    color: 'Red'
});
mitsi.save();
CatModel.find({ color: 'Red' }).then(docs => console.log(docs)).catch(err => console.log(err.message));
// CatModel.find({ age: 5 }).then(docs => console.log(docs)).catch(err => console.log(err.message))
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
