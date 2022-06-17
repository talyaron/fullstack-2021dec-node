"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
// @ts-ignore
var port = process.env.PORT || 3000;
app.use(express_1["default"].static("public"));
app.use(express_1["default"].json());
// import usersRoute from "./routes/usersRoute";
// app.use("/users", usersRoute);
// import itemsRoute from "./routes/itemsRoute"
// app.use("/items", itemsRoute);
app.listen(port, function () {
    console.log("Express is listening at http://localhost:" + port);
});
