import express from "express"
import { addProductToCart } from "./userCartCont"
const router = express.Router()

router
.post('/addProductToCart', addProductToCart)
export default router