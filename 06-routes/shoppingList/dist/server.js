"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
app.use("/users", usersRoute_1.default);
const itemsRoute_1 = __importDefault(require("./routes/itemsRoute"));
app.use("/items", itemsRoute_1.default);
app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
});
