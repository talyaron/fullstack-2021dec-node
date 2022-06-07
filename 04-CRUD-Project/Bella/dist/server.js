var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());
//all users array
var users = [];
app.get('/api/users', function (req, res) {
    var _a = req.body, userName = _a.userName, email = _a.email, uniqID = _a.uniqID, permissions = _a.permissions;
    if (!userName)
        throw new Error("User name is required");
    if (!email)
        throw new Error("Email is required");
    if (!uniqID)
        throw new Error("uniqID is required");
    if (!permissions)
        throw new Error("Permissions are required");
    res.send(users);
});
app.post('/api/add-user', function (req, res) {
    try {
        var _a = req.body, userName = _a.userName, email = _a.email, permissions = _a.permissions;
        if (!userName)
            throw new Error("User name is required");
        if (!email)
            throw new Error("Email is required");
        if (!permissions)
            throw new Error("Permissions are required");
        var user = {
            userName: userName,
            email: email,
            uniqID: uid(),
            permissions: permissions
        };
        users.push(user);
        // console.log(users);
        res.send({
            users: users
        });
    }
    catch (error) {
        res.send({
            error: error.message
        });
    }
});
app.put('/api/update-user', function (req, res) {
    try {
        var _a = req.body, userName = _a.userName, email = _a.email, uniqID_1 = _a.uniqID, permissions = _a.permissions;
        var userIndex = users.findIndex(function (user) { return user.uniqID === uniqID_1; });
        if (userIndex === -1)
            throw new Error("user not found");
        users[userIndex].userName = userName;
        users[userIndex].email = email;
        users[userIndex].permissions = permissions;
        res.send({
            users: users
        });
    }
    catch (error) {
        res.send({
            error: error.message
        });
    }
});
// UUid function
var uid = function () {
    return Date
        .now()
        .toString(36) + Math
        .random()
        .toString(36)
        .substr(2);
};
app.listen(port, function () {
    return console.log("Server is listening at http://localhost:" + port);
});
