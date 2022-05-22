var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static("public"));
var gamePlay = [
    { name: 'ManUnd', id: '12345' },
    { name: 'Barcelona', id: '2324' },
];
app.get('/api/user1', function (req, res) {
    try {
        setTimeout(function () {
            res.send({ play: gamePlay[0] });
        }, 200);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
//@ts-ignore: cannot find module 'axios'
