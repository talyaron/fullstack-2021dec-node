"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Connected now!");
// import uid from "./helpers";
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 4006;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const gameRoutes_1 = __importDefault(require("./routes/gameRoutes"));
app.use("/game", gameRoutes_1.default);
app.listen(port, () => {
    console.log(`Express is listening at ${port}`);
});
