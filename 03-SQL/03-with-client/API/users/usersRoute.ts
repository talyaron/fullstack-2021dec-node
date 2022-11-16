import express from 'express';
import { register } from './usersCont';
const router = express.Router();

router.post('/register',register);


export default router;