import express from 'express';
import { addProduct } from './productsCont';
const router = express.Router()

router.post('/add-product',addProduct);

export default router;