import express from "express";
import { addProduct } from "../ctrls/productCtrl";
import { isAdmin } from "../middlewares/middleware";

const router = express.Router();

router
    .get("/get-products", getProducts, isAdmin)
    .post("/add-product", addProduct)
    
export default router;