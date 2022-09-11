import express from 'express';
import { addProduct, getProducts, getProduct } from './productsCont';
const router = express.Router()

router.post('/add-product',addProduct)
.get('/get-product',getProduct)
.post('/delete-product',deleteProduct)
.get('/get-products', getProducts);

export default router;