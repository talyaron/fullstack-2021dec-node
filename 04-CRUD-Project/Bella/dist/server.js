var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.static('public'));
//all users array
var users = [];
app.get('/api/users', function (req, res) {
    res.send(users);
});
app.post('/api/add-user', function (req, res) {
    try {
        var _a = req.body, userName = _a.userName, email = _a.email, uniqID = _a.uniqID, permissions = _a.permissions;
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
        console.log(uid());
        users.push(user);
        res.send({ users: users });
    }
    catch (error) {
        res.send({ error: error.message });
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
    console.log("Server listening on port " + port);
});
