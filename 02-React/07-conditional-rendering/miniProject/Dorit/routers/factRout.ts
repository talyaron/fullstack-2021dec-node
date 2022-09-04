import { Router } from "express";
const router = Router()
import { addNewFact, getAllFacts } from "../controllers/factController";

router
.get("/get-all", getAllFacts)
.post("/save-fact", addNewFact)

export default router