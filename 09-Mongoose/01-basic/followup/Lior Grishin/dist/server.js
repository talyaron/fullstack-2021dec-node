"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.port || 3000;
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
