import express from 'express';
import {getAppo, createAppo, pairAppoToUser} from '../Conts/AppoCont'

const router = express.Router();

router
 .post('/getAppo', getAppo)
 .post('/createAppo', createAppo)
 .put('/pairAppoToUser', pairAppoToUser)


export default router

