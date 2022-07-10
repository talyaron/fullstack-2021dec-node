import express from 'express';
const router = express.Router()

import {handleGetUser, getCookie, } from '../controller/clientCont'

router.post('/addUser', handleGetUser)
        .get('/getCookie', getCookie)
        // .post('/getCount', getCountEntrance)


export default router;