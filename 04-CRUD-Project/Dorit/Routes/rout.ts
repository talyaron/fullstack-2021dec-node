import express from "express";
const router = express.Router();
import {
  getRecipe,
} from "../Controller/recipeCont";

router
  .get("getRecipe", getRecipe)
export default router;

