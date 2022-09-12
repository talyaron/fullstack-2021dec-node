import express from 'express';
import { addProduct, getProduct, deleteProduct } from './productsCont';
const router = express.Router();

router.post('/add-product', addProduct)
        .get('/get-product', getProduct)
        .delete('/delete-product', deleteProduct)

export default router;