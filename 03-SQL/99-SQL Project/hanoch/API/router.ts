import express  from "express";
import { addCostumer, login } from "./controllers/costumer";
import { addGuid, findAllGuides, guidesByFilter } from "./controllers/guids";
// import { upload } from "../server";
const router = express.Router();

router.post('/add-costumer', addCostumer)
      .post('/add-guide' ,addGuid)
      .get('/find-all-guides', findAllGuides)
      .get('/login', login)
      .get('/find-by-filter', guidesByFilter)

export default router;