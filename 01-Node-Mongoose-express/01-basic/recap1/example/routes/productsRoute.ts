import express from "express";
import { getProducts, addProduct ,deleteProduct,updateProduct} from "../control/productsCtrl";
const router = express.Router();

router
.get("/get-products", getProducts)
.post("/add-product", addProduct)
.delete("/delete-product", deleteProduct)
.patch('/update-product', updateProduct)

export default router;
