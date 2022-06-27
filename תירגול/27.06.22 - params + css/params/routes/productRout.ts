// import { Router } from 'express';
import express from 'express';
import { getAllProducts, getOneItem } from '../controllers/productsCont';
// const router = Router()
const router = express.Router()

router.get('/get-all-products', getAllProducts)
    .get('/:id', getOneItem)

export default router;
