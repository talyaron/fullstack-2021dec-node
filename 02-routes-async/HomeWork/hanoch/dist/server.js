var express = require('express');
var app = express();
var port = process.env.PORT | 4000;
app.use(express.json());
app.use(express.static('public'));
;
var randomJoke = [
    { type: "joke",
        content: "dont run when someone shooting on you because you will die tired"
    },
    {
        type: "meme",
        content: "https://www.askideas.com/media/46/My-Neighbors-Used-To-Listen-To-Justin-Bieber-Now-They-Dont-Funny-Meme-Image.jpg"
    },
    {
        type: "gif",
        content: "https://i0.wp.com/www.reactiongifs.com/r/sb2.gif"
    },
];
var random = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
app.get('/api/randomJoke', function (req, res) {
    res.send({ jokes: randomJoke[(random(0, randomJoke.length))] });
});
app.listen(port, function () {
    console.log("listen on port " + port);
});
