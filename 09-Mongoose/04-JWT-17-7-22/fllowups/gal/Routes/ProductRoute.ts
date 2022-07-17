import express from 'express';
import { getMyProducts } from '../Conts/ProductCont';
const router = express.Router();

router.get('/get-my-products', getMyProducts)


export default router