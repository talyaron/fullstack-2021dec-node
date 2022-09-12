import express from "express";
import {
  addProduct,
  getProducts,
  // deleteProduct,
  // updatePrice,
  // updateCard,
} from "./productsCont";
const router = express.Router();

router
  .post("/add", addProduct)
  .get("/get-products", getProducts)
  // .delete("/delete", deleteProduct)
  // .patch("/update-price", updatePrice)
  // .patch("/update-card", updateCard);

export default router;
