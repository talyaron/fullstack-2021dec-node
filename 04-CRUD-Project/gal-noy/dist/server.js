var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));
var gamePlay = [
    { TeamA: "ManUnd" },
    { TeamB: "Barcelona" },
];
//@ts-ignore: cannot find module 'axios'
