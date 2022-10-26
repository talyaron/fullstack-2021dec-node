import express from "express"
import { addProduct, getProducts, deleteProduct } from "./productControlers"
const router = express.Router()

router
.post('/addProduct', addProduct)
.get('/getProducts', getProducts)
.post('/deleteProduct', deleteProduct)
export default router