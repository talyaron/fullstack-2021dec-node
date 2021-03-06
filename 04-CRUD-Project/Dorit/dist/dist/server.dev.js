"use strict";

exports.__esModule = true;

var rout_1 = require("./Routes/rout");

var express = require("express");

var app = express();
var port = process.env.PORT || 2003;
app.use(express.json()); // to get body from client (body = data from client)

app.use(express["static"]("public"));
var recipes = [{
  name: "HoneyCake",
  ingredients: ["honey 30 gr", "sugar 0.5 glass", "flower 2 glasses", "eggs 3"],
  prepareMode: ["put into a bowel all the ingredients", "stir until very smooth", "put on the oven on 175 degrees", "bake for 45 minutes"],
  adderName: "Dorit Guy"
}, {
  name: "vanillaCake",
  ingredients: ["vanilla 30 gr", "sugar 0.5 glass", "flower 2 glasses", "eggs 3"],
  prepareMode: ["put into a bowel all the ingredients", "stir until very smooth", "put on the oven on 175 degrees", "bake for 45 minutes"],
  adderName: "Gadi Guy"
}]; //route

app.use("/api/get-recipe", rout_1["default"]); // app.put("/api/get-recipe", (req, res) => {
//     try {
//         const {recipeName} = req.body
//         if (!recipeName) throw new Error("recipeName is required");
//         const recipeIndex = recipes.findIndex(recipe => recipe.name === recipeName);
//         if (recipeIndex===-1) throw new Error("recipeName not found")
//         res.send({ recipe: recipes[recipeIndex] });
//       }
//      catch (error) {
//       res.send({ error: error.message });
//     }
// })

app.post('/api/add-recipe', function (req, res) {
  try {
    var _a = req.body,
        name = _a.name,
        ingredients = _a.ingredients,
        prepareMode = _a.prepareMode,
        adderName = _a.adderName;
    if (!name) throw new Error("name is required");
    if (!ingredients) throw new Error("ingredients are required");
    if (!prepareMode) throw new Error("prepareMode is required");
    if (!adderName) throw new Error("adderName is required");
    var myRecipe = {
      name: name,
      ingredients: ingredients,
      prepareMode: prepareMode,
      adderName: adderName
    };
    recipes.push(myRecipe);
    res.send({
      myRecipe: myRecipe
    });
  } catch (error) {
    res.send({
      error: error.message
    });
  }
});
app.post('/api/check-recipe', function (req, res) {
  try {
    var _a = req.body,
        adderName = _a.adderName,
        recipeName = _a.recipeName;
    if (!adderName) throw new Error("adderName is required");
    if (!recipeName) throw new Error("recipeName is required");
    var myRecipe_1 = {
      recipeName: recipeName,
      adderName: adderName
    };
    var recipeIndex = recipes.findIndex(function (recipe) {
      return recipe.name === myRecipe_1.recipeName;
    });
    if (recipeIndex === -1) throw new Error("recipeName not found");
    var recipeAdderName = recipes[recipeIndex]['adderName']; //console.debug(recipeAdderName,recipes[recipeIndex]);

    if (recipeAdderName !== myRecipe_1.adderName) {
      throw new Error("This recipe was added by another user");
    } else {
      myRecipe_1 = recipes[recipeIndex];
      res.send({
        myRecipe: myRecipe_1
      });
    }
  } catch (error) {
    res.send({
      error: error.message
    });
  }
});
app.post('/api/update-ing', function (req, res) {
  try {
    var _a = req.body,
        recipeName = _a.recipeName,
        myIng = _a.myIng;
    if (!recipeName) throw new Error("name is required");
    if (!myIng) throw new Error("ingredients are required");
    console.debug(myIng[0]);
    var myInp_1 = {
      recipeName: recipeName,
      myIng: myIng
    };
    var recipeIndex = recipes.findIndex(function (recipe) {
      return recipe.name === myInp_1.recipeName;
    });
    if (recipeIndex === -1) throw new Error("recipeName not found");
    console.debug("recipeIndex: " + recipeIndex);
    var len = myInp_1.myIng.length;

    for (var i = 0; i < len; i++) {
      recipes[recipeIndex]["ingredients"][i] = myInp_1.myIng[i];
    }

    ;
    console.debug(recipes[recipeIndex]);
    var myRecipe = recipes[recipeIndex];
    res.send({
      myRecipe: myRecipe
    });
  } catch (error) {
    res.send({
      error: error.message
    });
  }
});
app.post('/api/update-pre', function (req, res) {
  try {
    var _a = req.body,
        recipeName = _a.recipeName,
        myPre = _a.myPre;
    if (!recipeName) throw new Error("name is required");
    if (!myPre) throw new Error("ingredients are required");
    console.debug(myPre[0]);
    var myInp_2 = {
      recipeName: recipeName,
      myPre: myPre
    };
    var recipeIndex = recipes.findIndex(function (recipe) {
      return recipe.name === myInp_2.recipeName;
    });
    if (recipeIndex === -1) throw new Error("recipeName not found");
    console.debug("recipeIndex: " + recipeIndex);
    var len = myInp_2.myPre.length;

    for (var i = 0; i < len; i++) {
      recipes[recipeIndex]["prepareMode"][i] = myInp_2.myPre[i];
    }

    ;
    console.debug(recipes[recipeIndex]["prepareMode][0]"]);
    var myRecipe = recipes[recipeIndex];
    res.send({
      myRecipe: myRecipe
    });
  } catch (error) {
    res.send({
      error: error.message
    });
  }
});
app.listen(port, function () {
  console.log("Server listening on port " + port);
});