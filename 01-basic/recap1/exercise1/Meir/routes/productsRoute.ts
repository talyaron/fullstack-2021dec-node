import express from 'express';
import { getProducts, addProduct, deleteProduct } from '../control/productsCtrl';
const router = express.Router();

router.get("/get-products",getProducts)
.post("/add-product", addProduct)
.delete("/delete-products", deleteProduct);


export default router;