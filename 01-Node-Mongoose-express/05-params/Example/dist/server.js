var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
var users = [
    { name: "Moshe", age: 23, id: "yjnbcsgs" },
    { name: "Miriam", age: 33, id: "sgfdgdfg" },
    { name: "Aharon", age: 26, id: "jjghkgutyutyu" },
];
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
