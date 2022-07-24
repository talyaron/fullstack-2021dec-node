var express = require('express');
var app = express();
var port = process.env.PORT || 3100;
app.use(express.static('public'));
var users = [
    { name: 'Yair', age: 45, id: "wfwcwdc" },
    { name: 'Moshe', age: 41 },
    { name: 'Sagui', age: 34 }
];
app.get('/api/user1', function (req, res) {
    try {
        setTimeout(function () {
            res.send({ user: users[0] });
        }, 10000);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/user2', function (req, res) {
    try {
        setTimeout(function () {
            res.send({ user: users[1] });
        }, 800);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/user3', function (req, res) {
    try {
        setTimeout(function () {
            res.send({ user: users[2] });
        }, 2000);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
