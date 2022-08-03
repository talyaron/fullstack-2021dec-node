var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
var meme = [
    { name: 'first', src: "https://static.clideo.com/files/content/506/twitter-meme-maker-1.png" },
    { name: 'second', src: "https://static.toiimg.com/photo/74674393.cms" },
    { name: 'third', src: "https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg" },
];
app.get('/meme1', function (req, res) {
    try {
        res.send({ memes: meme[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/meme2', function (req, res) {
    try {
        res.send({ memes: meme[1] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/meme3', function (req, res) {
    try {
        res.send({ memes: meme[2] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
