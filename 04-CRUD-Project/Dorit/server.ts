const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));

interface Cake {
    name: string;
    ingredients: Array<string>;
    prepareMode: Array<string>;
  }
  
  let cakes: Array<Cake> = [
    { name: "HoneyCake", 
    ingredients:["honey 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
     prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"]},
     { name: "vanillaCake", 
     ingredients:["vanilla 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
      prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"]},
  ];
//route
app.put("/api/get-cake", (req, res) => {
    try {
        const {cakeName} = req.body
        if (!cakeName) throw new Error("cakeName is required");
        const cakeIndex = cakes.findIndex(cake => cake.name === cakeName);
        res.send({ cake: cakes[cakeIndex] });
      }
     catch (error) {
      res.send({ error: error.message });
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });