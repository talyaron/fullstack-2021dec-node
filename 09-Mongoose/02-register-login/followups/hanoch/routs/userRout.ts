import express from 'express';
const router = express.Router();
import {register, login} from '../controller/userCont'

router.post('/register', register)
    .post('/login', login)





export default router