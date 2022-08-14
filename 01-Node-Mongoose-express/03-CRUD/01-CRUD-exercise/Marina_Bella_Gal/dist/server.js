var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
var imgs = [
    { name: "meme1", src: "./imgs/img1.png", id: "1" },
    { name: "meme2", src: "./imgs/img2.png", id: "2" },
    { name: "meme3", src: "./imgs/img3.png", id: "3" },
    { name: "meme4", src: "./imgs/img4.png", id: "4" },
];
console.log(imgs);
app.get("/api/getImgs", function (req, res) {
    try {
        setTimeout(function () {
            res.send({ imgs: imgs });
        }, 500);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
