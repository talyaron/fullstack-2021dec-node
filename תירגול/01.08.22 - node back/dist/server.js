"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DBconnnect_1 = require("./DBconnnect");
const app = express_1.default();
const PORT = process.env.PORT || 9876;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
//-----DB CONNECTION ----//
DBconnnect_1.dbConnection();
const tasks_1 = __importDefault(require("./routes/tasks"));
app.use('/api', tasks_1.default);
try {
    app.listen(PORT, () => {
        console.log(`listen on http://localhost:${PORT}`);
    });
}
catch (error) {
    console.log(error);
}
