import express from "express"
const router = express.router ();
import {HandleUpdateItem, HandleBoughtItem} from "../cont/itemsCont"
router
.patch("/updateItem",HandleUpdateItem)
export default router
