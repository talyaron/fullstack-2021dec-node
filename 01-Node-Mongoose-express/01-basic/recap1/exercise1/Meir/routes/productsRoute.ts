import express from 'express';
import { getProducts, addProduct, deleteProduct, updateProduct } from '../control/productsCtrl';
const router = express.Router();

router.get("/get-products",getProducts)
.post("/add-product", addProduct)
.delete("/delete-products", deleteProduct)
.patch("/update-Product", updateProduct);


export default router;