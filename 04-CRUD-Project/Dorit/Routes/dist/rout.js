"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var recipeCont_1 = require("../Controller/recipeCont");
router
    .put("/getRoutRecipe", recipeCont_1.getRecipe)
    .post("/postRoutRecipe", recipeCont_1.addRecipe)
    .post("/postRoutAdderName", recipeCont_1.checkRecipe)
    .post("/postRoutIng", recipeCont_1.updateIng)
    .post("/postRoutPre", recipeCont_1.updatePre)
    .get("/getRoutRecipes", recipeCont_1.getAllRecipes);
exports["default"] = router;
