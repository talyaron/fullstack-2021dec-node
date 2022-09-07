import express from 'express';
import { addProduct, getProducts } from './productsCont';
const router = express.Router()

router.post('/add-product',addProduct)
.get('/get-products', getProducts);

export default router;