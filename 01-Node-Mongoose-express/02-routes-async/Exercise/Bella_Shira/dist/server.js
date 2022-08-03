var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
var images = [
    { name: "Shira's Cat", src: "./images/Cat1.jpg" },
    { name: "Bella's Cat", src: "./images/Cat2.jpg" },
];
app.get('/api/image1', function (req, res) {
    try {
        res.send({ image: images[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/image2', function (req, res) {
    try {
        res.send({ image: images[1] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
