import express from 'express';
const router = express.Router();
import { addUser, } from '../controlers/usersCont';


.post("/add-user",addUser)

export default router;