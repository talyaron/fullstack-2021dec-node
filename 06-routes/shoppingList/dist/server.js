"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
<<<<<<< HEAD
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
<<<<<<< HEAD
=======
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
app.use("/users", usersRoute_1.default);
// import {someFunction} from './controlers/usersCont'
>>>>>>> group2
=======
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const usersRoute_1 = __importDefault(require("../shoppingList/routes/usersRoute"));
// import usersRoute,{x} from "./routes/usersRoute";
app.use("/users", usersRoute_1.default);
>>>>>>> group1
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
