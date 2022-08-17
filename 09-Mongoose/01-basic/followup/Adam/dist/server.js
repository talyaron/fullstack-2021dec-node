"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = 3000;
mongoose_1.default
    .connect("mongodb+srv://adamepel11:QIRgOizBQtdX7RCD@cluster0.5ppyiaf.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
    console.log("Connected to DB!");
})
    .catch((err) => console.log(err));
//schema (interface)
const CatSchema = new mongoose_1.default.Schema({
    name: String,
    age: Number,
    owner: {
        type: String,
        required: true
    }
});
//Model = collection
const CatModel = mongoose_1.default.model("cats", CatSchema);
//instace (document)
const mitzi = new CatModel({ name: 'mitzi', age: 4 });
//
// mitzi.save().then(()=>{console.log('doc saved')}).catch(err=>console.log(err.message));
//search
CatModel.find({ age: { $gt: 2 } }).then(docs => console.log(docs)).catch(err => console.log(err.message));
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
