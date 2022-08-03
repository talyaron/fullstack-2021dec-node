"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import mongoose from "mongoose";
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
// interface User{
//   username:string;
//   id:string;
// }
// const users:Array<User>=[
//   {username:'Moshe', id:'dgdsg'},
//   {username:'Miriam,', id:'dgdsdghghg'},
// ]
// app.get('/users' 'get-users', (req, res)=> {
//   try {
//       res.send({ ok: true, users });
//   } catch (error) {
//       console.log(error.error);
//       res.send({ error: error.message });
//   }
// })
const usersRout_1 = __importDefault(require("./route/usersRout"));
app.use("/users", usersRout_1.default);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
