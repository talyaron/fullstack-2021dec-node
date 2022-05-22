var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
var conStory = [];
app.post('/api/onGo_story', function (req, res) {
    try {
        var _a = req.body, name = _a.name, story = _a.story;
        if (!name)
            throw new Error("name is required");
        if (!story)
            throw new Error("story is required");
        var tellStory = { name: name, story: story };
        conStory.push(tellStory);
        res.send({ conStory: conStory });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
