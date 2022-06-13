"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = process.env.PORT || 3000;
app.use(express_1["default"].static("public"));
app.use(express_1["default"].json());
var indexRoutes_1 = require("./routes/indexRoutes");
app.use("/index", indexRoutes_1["default"]);
//import MTARoutes from "./routes/MTARoute";
// app.use("/MTA", MTARoute);
// import HTARoute from "./routes/HTARoute"
// app.use("/HTA", HTARoute);
app.listen(port, function () {
    console.log("Express is listening at http://localhost:" + port);
});
