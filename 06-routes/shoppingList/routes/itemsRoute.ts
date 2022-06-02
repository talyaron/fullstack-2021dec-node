import express from "express";
const router = express.Router();
import { HandleUpdateItem } from "../cont/itemsCont";

router.patch("/updateItem", HandleUpdateItem)
    // .get()
    



export default router;
