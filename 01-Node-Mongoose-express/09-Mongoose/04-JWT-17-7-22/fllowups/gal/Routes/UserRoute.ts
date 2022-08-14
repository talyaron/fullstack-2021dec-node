import express from 'express';
import { login, register } from '../Conts/UserCont';
const router = express.Router();

router.post('/register', register)
.post('/login', login);

export default router