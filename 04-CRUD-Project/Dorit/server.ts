const express = require("express");
const app = express();
const port = process.env.PORT || 3006;

app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));

interface Recipe {
    name: string;
    ingredients: Array<string>;
    prepareMode: Array<string>;
    adderName:string
  }
  
  let recipes: Array<Recipe> = [
    { name: "HoneyCake", 
    ingredients:["honey 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
     prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"],
     adderName:"Dorit Guy"},
     { name: "vanillaCake", 
     ingredients:["vanilla 30 gr","sugar 0.5 glass","flower 2 glasses","eggs 3"],
      prepareMode: ["put into a bowel all the ingredients","stir until very smooth","put on the oven on 175 degrees","bake for 45 minutes"],
      adderName:"Gadi Guy"}
  ];
//route
app.put("/api/get-recipe", (req, res) => {
    try {
        const {recipeName} = req.body
        if (!recipeName) throw new Error("recipeName is required");
        const recipeIndex = recipes.findIndex(recipe => recipe.name === recipeName);
        if (recipeIndex===-1) throw new Error("recipeName not found")
        res.send({ recipe: recipes[recipeIndex] });
      }
     catch (error) {
      res.send({ error: error.message });
    }
})

app.post('/api/add-recipe', (req, res) => {
  try {
    const {name,ingredients,prepareMode,adderName } = req.body;
    if(!name) throw new Error("name is required");
    if(!ingredients) throw new Error("ingredients are required");
    if(!prepareMode) throw new Error("prepareMode is required")
    if(!adderName) throw new Error("adderName is required")

    const myRecipe:Recipe = {name, ingredients, prepareMode, adderName};

    recipes.push(myRecipe);

    res.send({myRecipe});

  } catch (error) {
    res.send({ error: error.message });
  }
})

app.post('/api/check-recipe', (req, res) => {
  try {
    const {adderName, recipeName } = req.body;
    if(!adderName) throw new Error("adderName is required");
    if(!recipeName) throw new Error("recipeName is required");
    let myRecipe:any = {recipeName, adderName};
    const recipeIndex = recipes.findIndex(recipe => recipe.name === myRecipe.recipeName);
    if (recipeIndex===-1) throw new Error("recipeName not found")
    const recipeAdderName = recipes[recipeIndex]['adderName'];
    console.debug(recipeAdderName,recipes[recipeIndex]);
    if (recipeAdderName!==myRecipe.adderName){
      throw new Error("This recipe was added by another user")
    }else{
      myRecipe=recipes[recipeIndex]
      res.send({myRecipe})
    }

  } catch (error) {
    res.send({ error: error.message });
  }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });