"use strict";
exports.__esModule = true;
exports.postStory = void 0;
function postStory(req, res) { }
exports.postStory = postStory;
{
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
}
;
