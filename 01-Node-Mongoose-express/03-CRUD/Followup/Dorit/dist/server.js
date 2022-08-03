var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
var images = [
    { src: "https://us.123rf.com/450wm/lopolo/lopolo2010/lopolo201006598/158508332-black-french-bulldog-puppy-over-a-white-background.jpg?ver=6", desc: "dog", id: "1" },
    { src: "https://us.123rf.com/450wm/kho/kho2104/kho210400082/168363470-fashion-red-tabby-cat-wearing-round-pink-sunglasses-and-summer-shirt-gorgeous-fluffy-adorable-young-.jpg?ver=6", desc: "cat", id: "2" },
    { src: "https://us.123rf.com/450wm/vectorcoolarts/vectorcoolarts2104/vectorcoolarts210400028/168293494-cute-happy-duck-cartoon-illustration.jpg?ver=6", desc: "duck", id: "3" },
    { src: "https://us.123rf.com/450wm/hadiabdu/hadiabdu2007/hadiabdu200700564/152031057-vector-flat-fox-s-face-isolated-cartoon-style-illustration-animal-s-head-object-for-web-poster-banne.jpg?ver=6", desc: "fox", id: "4" }
];
app.get("/api/get-images", function (req, res) {
    try {
        res.send({ images: images });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app["delete"]("/api/delete-image", function (req, res) {
    try {
        console.log(req.body);
        var imageId_1 = req.body.imageId;
        console.log("imageId to delete " + imageId_1);
        var index = images.findIndex(function (image) { return image.id === imageId_1; });
        if (index === -1)
            throw new Error("Couldnt find image to delete");
        //delete image from images
        images = images.filter(function (image) { return image.id !== imageId_1; });
        res.send({ images: images });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
