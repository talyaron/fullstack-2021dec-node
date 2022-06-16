import express from "express";
const router = express.Router();
import { getItems, HandleUpdateItem,filterItems } from "../cont/itemsCont";
import { deleteItem } from "../cont/itemsCont";
import { addItem } from "../cont/itemsCont";

router
    .patch("/updateItem", HandleUpdateItem)
    .delete("/delete-item", deleteItem)
    .get("/get-items", getItems)
    .post("/addItem", addItem)
    .post("/searchItems", filterItems)

export default router;
