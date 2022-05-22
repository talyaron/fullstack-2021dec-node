var express = require("express");
var app = express();
var port = process.env.PORT || 4000;
app.use(express.json()); // to get body from client (body = data from client)
app.use(express.static("public"));
var recipes = [
    { name: "HoneyCake",
        ingredients: ["honey 30 gr", "sugar 0.5 glass", "flower 2 glasses", "eggs 3"],
        prepareMode: ["put into a bowel all the ingredients", "stir until very smooth", "put on the oven on 175 degrees", "bake for 45 minutes"],
        adderName: "Dorit Guy" },
    { name: "vanillaCake",
        ingredients: ["vanilla 30 gr", "sugar 0.5 glass", "flower 2 glasses", "eggs 3"],
        prepareMode: ["put into a bowel all the ingredients", "stir until very smooth", "put on the oven on 175 degrees", "bake for 45 minutes"],
        adderName: "Gadi Guy" }
];
//route
app.put("/api/get-cake", function (req, res) {
    try {
        var recipeName_1 = req.body.recipeName;
        if (!recipeName_1)
            throw new Error("recipeName is required");
        var recipeIndex = recipes.findIndex(function (recipe) { return recipe.name === recipeName_1; });
        if (recipeIndex === -1)
            throw new Error("recipeName not found");
        res.send({ recipe: recipes[recipeIndex] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.post('/api/add-recipe', function (req, res) {
    try {
        var _a = req.body, name = _a.name, ingredients = _a.ingredients, prepareMode = _a.prepareMode, adderName = _a.adderName;
        if (!name)
            throw new Error("name is required");
        if (!ingredients)
            throw new Error("ingredients are required");
        if (!prepareMode)
            throw new Error("prepareMode is required");
        if (!adderName)
            throw new Error("adderName is required");
        var myRecipe = { name: name, ingredients: ingredients, prepareMode: prepareMode, adderName: adderName };
        recipes.push(myRecipe);
        res.send({ myRecipe: myRecipe });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
