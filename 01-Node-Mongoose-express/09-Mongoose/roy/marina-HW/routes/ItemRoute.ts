
import express from "express";
const router = express.Router();

import {
  getProduct,
  addItem,
  yearRange,
  // updateItem,
} from "../controllers/ItemController";

router
  .get("/get-item", getProduct)
  .post("/add", addItem)
  .get("/range-by-year", yearRange)
  // .post("/update-one", updateItem)
export default router;