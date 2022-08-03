"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
mongoose_1.default.connect('mongodb+srv://Juda:UdM8u2wgkNmTUZxn@cluster1.pge6u.mongodb.net/JudasCats?retryWrites=true&w=majority')
    .then(() => { console.log('connect to DB'); })
    .catch(err => console.log(err));
const routes_1 = __importDefault(require("./routes/routes"));
app.use('/cats', routes_1.default);
