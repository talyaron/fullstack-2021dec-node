"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.port || 3000;
mongoose_1.default
    .connect('mongodb+srv://Lior:d4GwqN2XeUoDMTB5@cluster0.ejcnt.mongodb.net/MyFirstDB?retryWrites=true&w=majority')
    .then(() => {
    console.log('Connected To MyFirstDB');
})
    .catch((error) => {
    console.error(error);
});
const CatSchema = new mongoose_1.default.Schema({
    name: String,
    age: Number,
    color: String
});
const CatModel = mongoose_1.default.model("My Cats", CatSchema);
const juli = new CatModel({ name: 'Juli', age: 17, color: 'gray' });
const rizik = new CatModel({ name: 'Rizik', age: 8, color: 'red' });
const dango = new CatModel({ name: 'Dango', age: 0.4, color: 'red' });
juli.save();
rizik.save();
dango.save();
CatModel.find({ color: { $eq: 'red' } })
    .then((docs) => {
    console.log(docs);
})
    .catch((error) => {
    console.log(error.message);
});
// Second way to find color red cats    
// CatModel.find({color: 'red'})
//     .then((docs) => {
//         console.log(docs);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     })
app.get('/', (req, res) => {
    try {
        res.send('Hello World');
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
