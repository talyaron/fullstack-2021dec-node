import express from 'express';
import {login, register, saveInfo, getUser} from '../Conts/UserCont';
const router = express.Router();

router
    .post('/login', login)
    .post('/register', register)
    .post('/SaveInfo', saveInfo)
    .get('/get-user', getUser)



export default router