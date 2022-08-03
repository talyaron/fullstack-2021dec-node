// @ts-ignore
const express = require("express");
const app = express();// @ts-ignore
const port = process.env.PORT || 4000;

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



app.delete("/api/delete-Image", (req, res) => {
  try {
    console.log(req.body);
    const { imageId } = req.body;
   

    const index: number = images.findIndex((user) => user.id === imageId);

    if (index === -1) throw new Error("Couldnt find user to delete");

    //delete user from users
    images = images.filter((user) => user.id !== imageId);
    setTimeout(() => {
      res.send({ images });
    }, 1000);
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});