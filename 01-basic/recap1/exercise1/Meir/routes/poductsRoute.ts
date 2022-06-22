import express from "express";
import { getProducts } from "../control/products";
const router = express.Router();

router.get('/get-produtcs', getProducts);

export default router