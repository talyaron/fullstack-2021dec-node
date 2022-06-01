import express from "express";
const router = express.Router();
import { HandleUpdateItem } from "../cont/itemsCont";
import { deleteItem } from "../cont/itemsCont";

router
    .patch("/updateItem", HandleUpdateItem)
    .delete("/delete-item", deleteItem);
    

export default router;
