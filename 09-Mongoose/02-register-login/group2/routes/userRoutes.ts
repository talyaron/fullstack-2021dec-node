import express from 'express';
import {login, register, saveInfo, getUser} from '../controllers/userControls';
const router = express.Router();

router
    .post('/login', login)
    .post('/register', register)
    .post('/SaveInfo', saveInfo)
    .get('/get-user', getUser)



export default router