"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const catsModel_1 = __importDefault(require("./model/catsModel"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://Shira:1J0gRfeVglRz7j8Z@cluster0.xrmkw.mongodb.net/?retryWrites=true&w=majority')
    .then(() => { console.log('Connected to DB!'); })
    .catch(err => console.log(err));
catsModel_1.default.find({ age: { $gte: 2 } }).then(docs => console.log(docs)).catch(err => console.log(err.message));
app.use(express_1.default.static('public'));
const catsRoute_1 = __importDefault(require("./routes/catsRoute"));
app.use('/cats', catsRoute_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
