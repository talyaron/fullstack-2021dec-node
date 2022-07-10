"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Connected!");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
var cookieParser = require('cookie-parser');
const app = express_1.default();
const port = process.env.PORT || 3000;
require('dotenv').config();
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const clientRoute_1 = __importDefault(require("./routes/clientRoute"));
app.use('/clients', clientRoute_1.default);
const url = process.env.MONGODB_URI;
mongoose_1.default.connect(url).then(() => {
    console.log("Connected");
}).catch(err => {
    console.error(err);
});
// mongoose.connect('mongodb+srv://Shira:1J0gRfeVglRz7j8Z@cluster0.xrmkw.mongodb.net/?retryWrites=true&w=majority')
// .then(()=>{console.log('Connected to DB!')})
// .catch(err=>console.log(err));
app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
});
