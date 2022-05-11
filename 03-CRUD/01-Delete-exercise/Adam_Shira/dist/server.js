var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
var images = [
    { name: "Img1", src: "./images/img1.png", id: "aaa" },
    { name: "Img2", src: "./images/img1.png", id: "bbb" },
];
app.get("/api/img1", function (req, res) {
    try {
        res.send({ images: images[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get("/api/img2", function (req, res) {
    try {
        res.send({ images: images[1] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
// app.delete("/api/delete-user", (req, res) => {
//   try {
//     console.log(req.body);
//     const { userId } = req.body;
//     console.log(userId);
//     const index: number = users.findIndex((user) => user.id === userId);
//     if (index === -1) throw new Error("Couldnt find user to delete");
//     //delete user from users
//     users = users.filter((user) => user.id !== userId);
//     setTimeout(() => {
//       res.send({ users });
//     }, 4000);
//   } catch (error) {
//     res.send({ error: error.message });
//   }
// });
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
