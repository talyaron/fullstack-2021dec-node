import express from "express";
const router = express.Router();
import { hendleGetDataServer } from '../controllers/controllers';

router.get('/get-data', hendleGetDataServer)

export default router;