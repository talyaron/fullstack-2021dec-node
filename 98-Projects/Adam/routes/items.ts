const express = require("express");
const router = express.Router();
import {getAllItems} from '../controllers/items';

router.get('/', (req:any, res:any) => {
    console.log(req.query)
    res.json(getAllItems(req,res)) // convert items JSON to string and return to response
}) 

export default router;