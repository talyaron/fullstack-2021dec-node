const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));

interface Cake {
    name: string;
    ingredients: Array<string>;
    prepareMode: Array<string>;
  }
  
  let cakes: Array<Cake> = [
    { name: "NoneyCake", 
    ingredients:["honey 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
     prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"]},
     { name: "vanillaCake", 
     ingredients:["vanilla 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
      prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"]},
  ];



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });