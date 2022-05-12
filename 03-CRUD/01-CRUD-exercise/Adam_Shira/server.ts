const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));

interface Image {
  name: string;
  src: string;
  id: string;
}

let images: Array<Image> = [
  { name: "Img1", src:"./images/img1.jpg", id: "aaa" },
  { name: "Img2", src:"./images/img2.jpg", id: "bbb" },
];

app.get("/api/img1", (req, res) => {
  try {
      res.send({ image: images[0] });
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.get("/api/img2", (req, res) => {
  try {
      res.send({ image: images[1] });
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.get("/api/get-imgs", (req, res) => {
    try {
      res.send({ images });
    } catch (error) {
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

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});