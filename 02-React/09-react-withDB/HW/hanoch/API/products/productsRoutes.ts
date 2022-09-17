import express from 'express';
import { addProduct, getProduct, deleteProduct, updateProduct } from './productsCont';
const router = express.Router();

router.post('/add-product', addProduct)
        .get('/get-product', getProduct)
        .delete('/delete-product', deleteProduct)
        .patch('/update-product', updateProduct)

export default router;