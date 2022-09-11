import express from 'express';
import { addProduct, getProduct } from './productsCont';
const router = express.Router();

router.post('/add-product', addProduct)
        .get('/get-product', getProduct)

export default router;