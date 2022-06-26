import express from "express";
const router = express.Router();

import { addCat,getAllCats } from "../cont/cont";

router.post("/add-cat", addCat)
router.get("/get-all-cats", getAllCats)

export default router