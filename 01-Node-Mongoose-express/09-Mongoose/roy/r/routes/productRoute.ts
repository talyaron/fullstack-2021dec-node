import express from 'express';
import { getMyProducts } from '../controls/productCont';
const router = express.Router();

router.get('/get-my-products', getMyProducts)


export default router