var express = require('express');
var app = express();
var port = process.env.PORT || 3100;
app.use(express.static('public'));
var users = [
    { name: 'Meir', age: 45 },
    { name: 'Meiital', age: 41 }
];
app.get('/api/user1', function (req, res) {
    try {
        res.send({ user: users[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/user2', function (req, res) {
    try {
        res.send({ user: users[1] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
