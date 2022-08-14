var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
var images = [
    { name: 'mount', src: https } //picsum.photos/seed/picsum/536/354},
    ,
    { name: 'pappy', src: https } //picsum.photos/id/237/536/354},
];
app.get('/img1', function (req, res) {
    try {
        res.send({ img: images[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/img2', function (req, res) {
    try {
        res.send({ img: images[1] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
