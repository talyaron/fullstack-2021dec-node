import express from 'express';
import {getAppo} from '../Conts/AppoCont'

const router = express.Router();

router
 .get('/getAppo', getAppo)

export default router

