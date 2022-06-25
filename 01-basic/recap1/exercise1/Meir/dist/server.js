"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000; // default port to listen
app.use(express.json());
const helpers_1 = __importDefault(require("./control/helpers"));
// define a route handler for the default home page
app.use(express.static('public'));
console.log(helpers_1.default(), randNumber(200));
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
const productsRoute_1 = __importDefault(require("./routes/productsRoute"));
app.use('/products', productsRoute_1.default);
function randNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}
