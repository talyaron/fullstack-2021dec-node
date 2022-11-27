import express  from "express";
import { addCostumer } from "./controllers/costumer";
import { addGuid, findAllGuides } from "./controllers/guids";
// import { upload } from "../server";
const router = express.Router();

router.post('/add-costumer', addCostumer)
      .post('/add-guide' ,addGuid)
      .get('/find-all-guides', findAllGuides)

export default router;