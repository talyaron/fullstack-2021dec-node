"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const app = express_1.default();
const port = 4000;
app.use(express_1.default.static("./client/build"));
app.use(express_1.default.json());
exports.connection = mysql_1.default.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345678",
    database: "game",
});
exports.connection.connect((err) => {
    try {
        if (err)
            throw err;
        console.info("🔥 MySQL is connected 🛢 ");
    }
    catch (error) {
        console.error(error);
    }
});
const usersRoute_1 = __importDefault(require("../../../fullstack-2021dec-node/03-SQL/03-with-client/API/users/usersRoute"));
app.use('/api/users', usersRoute_1.default);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
