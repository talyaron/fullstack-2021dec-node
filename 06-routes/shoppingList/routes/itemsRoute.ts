import express from "express";
const router = express.Router();
import { HandleUpdateItem, getAllItems, filterItems } from "../cont/itemsCont";

router
.patch("/updateItem", HandleUpdateItem)
.get("/getAllItems", getAllItems)
.post("/searchItems", filterItems)


export default router;
