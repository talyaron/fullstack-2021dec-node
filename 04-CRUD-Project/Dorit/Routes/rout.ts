import express from "express";
const router = express.Router();
import {
  addRecipe,
  getRecipe,
  checkRecipe,
  updateIng,
  updatePre,
  getAllRecipes
} from "../Controller/recipeCont";

router
  .put("/getRoutRecipe", getRecipe)
  .post("/postRoutRecipe", addRecipe)
  .post("/postRoutAdderName",checkRecipe)
  .post("/postRoutIng",updateIng)
  .post("/postRoutPre",updatePre)
  .get("/getRoutRecipes",getAllRecipes)

export default router;


