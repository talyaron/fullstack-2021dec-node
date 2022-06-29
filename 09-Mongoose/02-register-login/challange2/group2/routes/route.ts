import express from 'express';
import { login, register } from '../controllers/controller';
const router = express.Router();

router.post('/login', login)
.post('/register', register)

export default router