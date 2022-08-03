var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
var jokes = [
    { title: "First", text: "Bla" },
    { title: "Second", text: "Bla Bla" },
    { title: "Third", text: "Bla Bla Bla" },
];
app.get('/api/joke1', function (req, res) {
    try {
        res.send({ joke: jokes[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/joke2', function (req, res) {
    try {
        res.send({ joke: jokes[1] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/joke3', function (req, res) {
    try {
        res.send({ joke: jokes[2] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
