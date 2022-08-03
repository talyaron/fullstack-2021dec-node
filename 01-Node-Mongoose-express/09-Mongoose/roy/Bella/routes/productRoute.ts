import express from "express";
import { addProduct } from "../ctrls/productCtrl";
const router = express.Router();

router
    .post("/add-product", addProduct)
    
export default router;