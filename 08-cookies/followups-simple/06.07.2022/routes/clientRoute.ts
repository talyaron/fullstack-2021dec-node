
import express from "express";
const router = express.Router();
import { setHello } from "../controllers/clientController";



router.get("/hello", setHello);
export default router;