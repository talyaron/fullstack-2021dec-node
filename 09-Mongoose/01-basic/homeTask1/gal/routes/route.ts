import express from "express";
const router = express.Router();

import { addCat } from "../cont/cont";

router.post("/add-cat", addCat)

export default router