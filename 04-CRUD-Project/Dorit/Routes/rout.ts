import express from "express";
const router = express.Router();
import {
  addRecipe,
  getRecipe,
  checkRecipe,
  updateIng,
  updatePre
} from "../Controller/recipeCont";

router
  .put("/getRoutRecipe", getRecipe)
  .post("/postRoutRecipe", addRecipe)
  .post("/postRoutAdderName",checkRecipe)
  .post("/postRoutIng",updateIng)
  .post("/postRoutPre",updatePre)
export default router;


