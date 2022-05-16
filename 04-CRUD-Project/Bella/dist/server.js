var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
app.use(express.static('public'));
var users = [];
app.get("/api/AllUsers", function (req, res) {
    try {
        setTimeout(function () {
            res.send({
                user: users
            });
        }, 100);
    }
    catch (error) {
        res.send({
            error: error.message
        });
    }
});
app.get("/api/addUser", function (req, res) {
    try {
        setTimeout(function () {
            res.send({
                user: users
            });
        }, 100);
    }
    catch (error) {
        res.send({
            error: error.message
        });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
