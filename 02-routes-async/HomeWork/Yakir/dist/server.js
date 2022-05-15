var express = require("express");
var app = express();
var port = process.env.PORT || 4001;
app.use(express.static("public"));
var gifs = [
    {
        key: 0,
        src: "https://media1.giphy.com/media/yKnB7Ivvi4p5JWBGfM/giphy.gif?cid=790b7611f857a41174a0bfbf8dcf5ba4cd7b4b802f2489b7&rid=giphy.gif&ct=g"
    },
    {
        key: 1,
        src: "https://media1.giphy.com/media/3HlNqoDrV1LtlZ1eH7/giphy.gif?cid=790b7611ee895518e1a908296643a2e0d246e3fd907047bb&rid=giphy.gif&ct=g"
    },
    {
        key: 2,
        src: "https://media4.giphy.com/media/oHv95zjS472iZ4oiP5/giphy.gif?cid=790b76116261817de696b4a07a60e3c2ab0baafdc87fdc24&rid=giphy.gif&ct=g"
    },
    {
        key: 3,
        src: "https://media0.giphy.com/media/ThqIFhE2WsPiP5KcSn/giphy.gif?cid=790b7611781c9167c4ae1959614fc236d910d463ee2f43ea&rid=giphy.gif&ct=g"
    },
    {
        key: 4,
        src: "https://media3.giphy.com/media/v8Isi78ROZJcxM9mMW/giphy.gif?cid=790b761184bb9f115493ed230b389ac478dca1573aa027d1&rid=giphy.gif&ct=g"
    },
    {
        key: 5,
        src: "https://media0.giphy.com/media/8TtxfNs3GrZbWtbojP/giphy.gif?cid=790b761127aabfdb9ffc178e515d1c751e6b69102efad5e4&rid=giphy.gif&ct=g"
    },
    {
        key: 6,
        src: "https://media1.giphy.com/media/58F36GFKeCfeZd7Mh7/giphy.gif?cid=790b7611144bdeaa50897c099c7d9334b2237e1d4926a695&rid=giphy.gif&ct=g"
    },
    {
        key: 7,
        src: "https://media2.giphy.com/media/l4pTldWDec8WamJUc/giphy.gif?cid=790b76117ea5f20b2b6168b5ec195af60849f0bc37907a77&rid=giphy.gif&ct=g"
    },
];
app.get("/api/SpaceGif", function (req, res) {
    try {
        res.send({ gifs: gifs[randomGif()].src });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
function randomGif() {
    return Math.floor(Math.random() * 7);
}
app.listen(port, function () {
    console.log("Server listening on port: " + port);
});
