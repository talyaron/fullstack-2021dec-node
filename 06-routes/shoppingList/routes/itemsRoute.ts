import express from "express";
const router = express.Router();
import { getItems, HandleUpdateItem } from "../cont/itemsCont";
import { deleteItem } from "../cont/itemsCont";

router
    .patch("/updateItem", HandleUpdateItem)
    .delete("/delete-item", deleteItem)
    .get("/get-items", getItems)

export default router;
