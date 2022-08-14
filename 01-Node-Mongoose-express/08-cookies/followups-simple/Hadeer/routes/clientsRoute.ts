import express from 'express';
const router =express.Router();

import {clientName} from '../controlers/clientCont'

router.get('/clientName', clientName)

export default router;