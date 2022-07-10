import express from 'express'
const router = express.Router();

import {setStart} from '../controllers/clientCont'

router.get('/start',setStart )

export default router;