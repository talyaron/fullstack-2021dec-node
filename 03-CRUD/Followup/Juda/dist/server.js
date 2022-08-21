var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));
var users = [
    { name: 'juda', age: 28, id: 'dfgdf' },
    { name: 'dudu', age: 45, id: 'mdfgdf' },
    { name: 'eli', age: 88, id: '4thrh4' },
];
app.get('/api/user1', function (req, res) {
    try {
        setTimeout(function () {
            res.send({ user: users[0] });
        }, 500);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/user2', function (req, res) {
    try {
        setTimeout(function () {
            res.send({ user: users[1] });
        }, 500);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get("/api/getUsers", function (req, res) {
    try {
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app["delete"]('/api/delete-user', function (req, res) {
    try {
        var userId_1 = req.body.userId;
        console.log(userId_1);
        var index = users.findIndex(function (user) { return user.id === userId_1; });
        console.log(index);
        users.splice(index, 1);
        res.send({ users: users });
        if (index === -1)
            throw new Error('couldnt find user to delete');
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
