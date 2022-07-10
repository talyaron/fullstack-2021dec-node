import express from 'express';
const router = express.Router()

import {addUser, getCookie,login } from '../controller/clientCont'

router.post('/addUser', addUser)
        .get('/getCookie', getCookie)
        .post('/login',login)
        // .post('/getCount', getCountEntrance)


export default router;