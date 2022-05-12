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
        var userId_1 = req.body.userId;
        if (!userId_1)
            throw new Error("userId is required");
        var userIndex = users.findIndex(function (user) { return user.id === userId_1; });
        if (userIndex === -1)
            throw new Error("user not found");
        users = users.filter(function (user) { return user.id !== userId_1; });
        console.log(users);
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.put('/api/update-user', function (req, res) {
    try {
        var _a = req.body, userId_2 = _a.userId, age = _a.age;
        if (!userId_2)
            throw new Error("userId is required");
        if (!age)
            throw new Error("age is required");
        var userIndex = users.findIndex(function (user) { return user.id === userId_2; });
        if (userIndex === -1)
            throw new Error("user not found");
        users[userIndex].age = age;
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
