import express from 'express';

import {addProduct,getProduct,deleteProduct, updatePrice, updateCard} from "./productsCont"




const router = express.Router();

router
.post("/add-product",addProduct)
.get("get-product",getProduct)
.delete("delete-product",deleteProduct)
.patch("update-price",updatePrice)
.patch("update-card",updateCard)


export default router;