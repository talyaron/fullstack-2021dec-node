const express = require("express");
const { Interface } = require("readline");
const app = express();
const port = process.env.PORT || 6767;
app.use(express.json()); 
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

interface Images {
  image?: string;
  description: string;
  id: string;
}


let arrayOfImages: Array<Images> = [
  {
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dpdHplcmxhbmR8ZW58MHx8MHx8&w=1000&q=80",
    description: "wow1",
    id: "567",
  },
  {
    image:
    "https://media.istockphoto.com/photos/thun-cityspace-with-alps-mountain-and-lake-in-switzerland-picture-id945092130?k=20&m=945092130&s=612x612&w=0&h=WvjFTWRmp_YFb2Relp20h7tYyLTtaEerBtdX9OFQWWs=",    
    description: "wow12",
    id: "433",
  },
  {
    image:
    "https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg",
    description: "wow3",
    id: "899",
  },
];

app.get("/api/image1", (req, res) => {
    try {
        res.send({ image: arrayOfImages[0] });
    } catch (error) {
      res.send({ error: error.message });
    }
  });
  app.get("/api/image2", (req, res) => {
    try {
        res.send({ image: arrayOfImages[1] });
    } catch (error) {
      res.send({ error: error.message });
    }
  });
  app.get("/api/image3", (req, res) => {
    try {
        res.send({ image: arrayOfImages[2] });
    } catch (error) {
      res.send({ error: error.message });
    }
  });
  app.get("/api/get-all-images", (req, res) => {
    try {
      res.send({arrayOfImages});
    } catch (error) {
      res.send({ error: error.message });
    }
  });
 
  app.delete("/api/delete-image", (req, res) => {
    try {
        const { imageId } = req.body;
     
      if (!imageId) throw new Error("imageId is required");
  
      const imageIndex = arrayOfImages.findIndex(image => image.id === imageId);
      if (imageIndex === -1) throw new Error("image not found");
  
      arrayOfImages = arrayOfImages.filter(image => image.id !== imageId);
      console.log(arrayOfImages)
      res.send({ arrayOfImages });
  
    } catch (error) {
      res.send({ error: error.message });
    }
  });
  