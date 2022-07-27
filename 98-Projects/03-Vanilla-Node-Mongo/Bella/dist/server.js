"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
let cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express_1.default();
app.use(cookieParser());
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const MONGODB_URI = process.env.MONGODB_URI;
if (MONGODB_URI) {
    mongoose_1.default
        .connect(MONGODB_URI)
        .then((res) => {
        console.log("Connected to DB");
    })
        .catch((err) => {
        console.log("Failed to connect");
        console.log(err.message);
    });
}
else {
    console.log("No MongoDB URI specified");
}
;
//userRoutes and stockRoutes
const userRoute_1 = __importDefault(require("./routes/userRoute"));
app.use("./users", userRoute_1.default);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
