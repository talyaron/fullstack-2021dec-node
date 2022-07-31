import express from 'express';
import {getAppo, createAppo} from '../Conts/AppoCont'

const router = express.Router();

router
 .post('/getAppo', getAppo)
 .post('/createAppo', createAppo)

export default router

