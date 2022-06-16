import express from "express";
const router = express.Router();
import {
  getRecipe,
} from "../Controller/recipeCont";

router
  .get("getRoutRecipe", getRecipe)
export default router;

