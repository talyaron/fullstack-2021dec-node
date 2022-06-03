import express from "express";
const router = express.Router();
import { HandleUpdateItem } from "../cont/itemsCont";
import { deleteItem } from "../cont/itemsCont";
import { addItem } from "../cont/itemsCont";

router
    .patch("/updateItem", HandleUpdateItem)
    .delete("/delete-item", deleteItem)
    .post("/addItem", addItem);
    

export default router;
