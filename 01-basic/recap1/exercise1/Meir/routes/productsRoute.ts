import express from 'express';
import { getProducts, addProduct } from '../control/productsCtrl';
const router = express.Router();

router.get('/get-produtcs',getProducts)
.post("/add-product, addProduct");


export default router;