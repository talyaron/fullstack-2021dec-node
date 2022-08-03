import express from 'express';
import {login, register,getUserByCookie,saveInfo} from '../Conts/UserCont';
const router = express.Router();

router
    .post('/login', login)
    .post('/register', register)
    .post('/SaveInfo', saveInfo)
    // .get('/get-user', getUser)
    .get('/get-user',getUserByCookie)

export default router