// @ts-ignore
var express = require("express");
var app = express();
// @ts-ignore
var port = process.env.PORT || 3000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
var myStory = [];
app.post("/api/story", function (req, res) {
    try {
        var _a = req.body, name = _a.name, text = _a.text;
        if (!name)
            throw new Error("Your name is required");
        if (!text)
            throw new Error("Your story is required");
        var newUserStory = { name: name, text: text };
        myStory.push(newUserStory);
        res.send({ myStory: myStory });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/getNewStory', function (req, res) {
    try {
        res.send({ myStory: myStory });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
