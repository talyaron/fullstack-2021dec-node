// @ts-ignore
var express = require("express");
var app = express(); // @ts-ignore
var port = process.env.PORT || 4000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
var images = [
    { name: "Img1", src: "./images/img1.jpg", id: "aaa" },
    { name: "Img2", src: "./images/img2.jpg", id: "bbb" },
];
app.get("/api/img1", function (req, res) {
    try {
        res.send({ image: images[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get("/api/img2", function (req, res) {
    try {
        res.send({ image: images[1] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get("/api/get-imgs", function (req, res) {
    try {
        res.send({ images: images });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app["delete"]("/api/delete-Image", function (req, res) {
    try {
        console.log(req.body);
        var imageId_1 = req.body.imageId;
        var index = images.findIndex(function (user) { return user.id === imageId_1; });
        if (index === -1)
            throw new Error("Couldnt find user to delete");
        //delete user from users
        images = images.filter(function (user) { return user.id !== imageId_1; });
        setTimeout(function () {
            res.send({ images: images });
        }, 1000);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
