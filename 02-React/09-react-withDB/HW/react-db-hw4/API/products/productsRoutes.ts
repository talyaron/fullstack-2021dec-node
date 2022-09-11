import express from "express";
const router = express.Router();

import {
  addProduct,
  getProducts,
  deleteProduct,
  updatePrice,
  updateCard
} from "./productsControllers";

router
  .post("/add", addProduct)
  .get("/get", getProducts)
  .delete("/delete", deleteProduct)
  .patch("/update-price", updatePrice)
  .patch("/update-card", updateCard)

export default router;