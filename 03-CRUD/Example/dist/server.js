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
app.get("/api/user1", function (req, res) {
    try {
        setTimeout(function () {
            res.send({ user: users[0] });
        }, 500);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get("/api/user2", function (req, res) {
    try {
        setTimeout(function () {
            res.send({ user: users[1] });
        }, 5000);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get("/api/user3", function (req, res) {
    try {
        setTimeout(function () {
            res.send({ user: users[2] });
        }, 10000);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get("/api/get-users", function (req, res) {
    try {
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app["delete"]("/api/delete-user", function (req, res) {
    try {
        console.log(req.body);
        var userId_1 = req.body.userId;
        console.log(userId_1);
        var index = users.findIndex(function (user) { return user.id === userId_1; });
        if (index === -1)
            throw new Error("Couldnt find user to delete");
        //delete user from users
        users = users.filter(function (user) { return user.id !== userId_1; });
        setTimeout(function () {
            res.send({ users: users });
        }, 4000);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
