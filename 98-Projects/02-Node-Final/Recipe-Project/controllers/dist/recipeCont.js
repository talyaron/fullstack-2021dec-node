"use strict";
exports.__esModule = true;
exports.updateRecipe = exports.deleteRecipe = exports.addRecipe = exports.getRecipes = void 0;
var helpers_1 = require("./helpers");
var recipes = [{ title: 'Bread', ingredients: 'flour,water,oil', owner: 'Shira', id: 'jbhvc', instructions: '1:mix all ingredients, 2:knead,3:bloat...' }];
function getRecipes(req, res) {
    try {
        res.send({ recipes: recipes });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.getRecipes = getRecipes;
function addRecipe(req, res) {
    try {
        var title = req.body.title;
        if (!title)
            throw new Error('no title');
        var id = helpers_1["default"]();
        if (!id)
            throw new Error('no id');
        var owner = req.body.owner;
        if (!owner)
            throw new Error('no owner');
        var ingredients = req.body.ingredients;
        if (!ingredients)
            throw new Error('no ingredients');
        var instructions = req.body.instructions;
        if (!instructions)
            throw new Error('no instructions');
        recipes.push({ title: title, id: id, ingredients: ingredients, owner: owner, instructions: instructions });
        res.send({ recipes: recipes });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.addRecipe = addRecipe;
function deleteRecipe(req, res) {
    try {
        var recipeId_1 = req.body.recipeId;
        if (!recipeId_1)
            throw new Error('recipeId is missing');
        console.log(recipeId_1);
        recipes = recipes.filter(function (recipe) { return recipe.id !== recipeId_1; });
        res.send({ recipes: recipes });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.deleteRecipe = deleteRecipe;
function updateRecipe(req, res) {
    try {
        var _a = req.body, newTitle = _a.newTitle, id_1 = _a.id;
        if (!newTitle)
            throw new Error('No title');
        if (!id_1)
            throw new Error('No id');
        var index = recipes.findIndex(function (recipe) { return recipe.id === id_1; });
        if (index === -1)
            throw new Error("No id with id: " + id_1 + " in recipes ");
        recipes[index].title = newTitle;
        res.send({ recipes: recipes });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.updateRecipe = updateRecipe;
