"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const PORT = process.env.PORT || 5689;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
try {
    mongoose_1.default.connect("mongodb+srv://KaKa:7pl0qohPTblWZF0T@cluster0.mfqlq.mongodb.net/test", () => {
        console.log(`DB connected`);
    });
}
catch (error) {
    console.log(error);
}
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
