var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
app.get("/api/shots", function (req, res) {
    try {
        res.send([0]);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get("/api/corners", function (req, res) {
    try {
        res.send();
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get("/api/fouls", function (req, res) {
    try {
        res.send();
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
