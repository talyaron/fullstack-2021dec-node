
import express from "express";

const app = express();
const port = process.env.PORT ||2003
import rout from "./Routes/rout"
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));

interface Recipe {
    name: string;
    ingredients: Array<string>;
    prepareMode: Array<string>;
    adderName:string
  }

import recipes from "./Controller/recipeCont"  
//  let recipes: Array<Recipe> = [
//     { name: "HoneyCake", 
//     ingredients:["honey 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
//      prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"],
//      adderName:"Dorit Guy"},
//      { name: "vanillaCake", 
//      ingredients:["vanilla 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
//       prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"],
//       adderName:"Gadi Guy"}
//   ]; 
//route
app.use("/api/get-recipe",rout)

app.use('/api/add-recipe',rout)

app.use('/api/check-recipe',rout)

app.use('/api/update-ing',rout)

app.use('/api/update-pre',rout)

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
