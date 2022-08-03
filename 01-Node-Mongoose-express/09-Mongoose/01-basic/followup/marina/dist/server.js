"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Yes! Connected!");
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 4009;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const routePaint_1 = __importDefault(require("./routes/routePaint"));
app.use('/art', routePaint_1.default);
mongoose_1.default.connect("mongodb+srv://ChicZiv:xRRIJs4WjEmo8f6W@cluster0.nbjog.mongodb.net/art-painting?retryWrites=true&w=majority");
console.log("Connected to DB!");
app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
});
