var express = require("express");
var Interface = require("readline").Interface;
var app = express();
var port = process.env.PORT || 6767;
app.use(express.json());
app.use(express.static("public"));
app.listen(port, function () {
    console.log("server is listening on port " + port);
});
var arrayOfImages = [
    {
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dpdHplcmxhbmR8ZW58MHx8MHx8&w=1000&q=80",
        description: "wow1",
        id: "567"
    },
    {
        image: "https://media.istockphoto.com/photos/thun-cityspace-with-alps-mountain-and-lake-in-switzerland-picture-id945092130?k=20&m=945092130&s=612x612&w=0&h=WvjFTWRmp_YFb2Relp20h7tYyLTtaEerBtdX9OFQWWs=",
        description: "wow12",
        id: "433"
    },
    {
        image: "https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg",
        description: "wow3",
        id: "899"
    },
];
app.get("/api/image1", function (req, res) {
    try {
        res.send({ image: arrayOfImages[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get("/api/image2", function (req, res) {
    try {
        res.send({ image: arrayOfImages[1] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get("/api/image3", function (req, res) {
    try {
        res.send({ image: arrayOfImages[2] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get("/api/get-all-images", function (req, res) {
    try {
        res.send({ arrayOfImages: arrayOfImages });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app["delete"]("/api/delete-image", function (req, res) {
    try {
        var imageId_1 = req.body.imageId;
        if (!imageId_1)
            throw new Error("imageId is required");
        var imageIndex = arrayOfImages.findIndex(function (image) { return image.id === imageId_1; });
        if (imageIndex === -1)
            throw new Error("image not found");
        arrayOfImages = arrayOfImages.filter(function (image) { return image.id !== imageId_1; });
        console.log(arrayOfImages);
        res.send({ arrayOfImages: arrayOfImages });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
