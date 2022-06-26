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
mongoose_1.default
    .connect("mongodb+srv://royfe:SCZcv2i07MhFJJ4r@cluster0.7asb5.mongodb.net/newdata?retryWrites=true&w=majority")
    .then(() => {
    console.log("Connected to DB!");
})
    .catch((err) => console.log(err));
const kittens = [
    { name: 'bitzi', age: 4, color: 'black', image: 'https://i1.sndcdn.com/avatars-k0VzPMgkOFKprEyv-bM3yzw-t240x240.jpg' },
    { name: 'witzi', age: 3, color: 'white', image: 'https://www.thesprucepets.com/thmb/nZpYXJxDYAHa4vMjCQjlTWNRMaA=/938x938/smart/filters:no_upscale()/33351631_260594934684461_1144904437047754752_n-5b17d77604d1cf0037f3ea5a.jpg' },
    { name: 'britzi', age: 2, color: 'brown', image: 'https://i.pinimg.com/originals/aa/d5/38/aad538ec4b7263d9a1ded5bfe55c4d4a.jpg' },
    { name: 'yitzi', age: 1, color: 'yellow', image: 'https://www.thesprucepets.com/thmb/ac8-PKFO6U6I6rF52bPlJDD1onM=/1471x980/filters:fill(auto,1)/GettyImages-1288261359-4016b054680e41d28451f081babd0c45.jpg' }
];
//kittensModel.create(kittens).then(()=>console.log('docs saved')).catch(err=>console.log(err.message));
//export const kittensAray= kittensModel
//console.log(kittens)
const catsRoute_1 = __importDefault(require("./routes/catsRoute"));
app.use('/cats', catsRoute_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
