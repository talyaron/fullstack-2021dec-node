import express from "express";
const router = express.Router();

import { getUser, updateUser } from "../controllers/usersController";

router
   .get('/find/:userId', getUser)
   .put('/', updateUser)
export default router;