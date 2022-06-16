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
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
app.use("/index", indexRoutes_1.default);
const MTARoutes_1 = __importDefault(require("./routes/MTARoutes"));
app.use("/MTA", MTARoutes_1.default);
// import HTARoute from "./routes/HTARoute"
// app.use("/HTA", HTARoute);
app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
});
