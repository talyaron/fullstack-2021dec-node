"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());
const clubsRoute_1 = __importDefault(require("./routes/clubsRoute"));
app.use('/danceClubs', clubsRoute_1.default);
// app.get("/danceClubs/findClub" ,(req, res) => {
// res.send('got it')
// })
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
