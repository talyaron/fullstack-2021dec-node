"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaAnimals = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const animalModel_1 = __importDefault(require("./model/animalModel"));
const app = express_1.default();
const port = 4000;
mongoose_1.default
    .connect("mongodb+srv://Bella:xFS7EsTQz8Frw7UL@cluster0.ceb2t.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
    console.log("Connected to DB!");
})
    .catch((err) => console.log(err));
// mongoose
//   .connect(
//     "mongodb+srv://Bella:xFS7EsTQz8Frw7UL@cluster0.ceb2t.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     console.log("Connected to DB!");
//   })
//   .catch((err) => console.log(err));
exports.SeaAnimals = [
    {
        name: 'Orca',
        Donation: '15$',
        color: 'blue',
    },
    {
        name: 'Starfish',
        Donation: '5$',
        color: 'red',
    },
    {
        name: 'Sea otter',
        Donation: '10$',
        color: 'green',
    }
];
animalModel_1.default.create(exports.SeaAnimals).then(() => console.log('docs saved')).catch(err => console.log(err.message));
//console.log the sea animals collection
console.log(exports.SeaAnimals);
//search for 'Orca'
animalModel_1.default.find({ name: 'Orca' }).then(docs => console.log(docs)).catch(err => console.log(err.message));
app.use(express_1.default.static('public'));
const seaAnimalsRoute_1 = __importDefault(require("./routes/seaAnimalsRoute"));
app.use('/seaAnimals', seaAnimalsRoute_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
