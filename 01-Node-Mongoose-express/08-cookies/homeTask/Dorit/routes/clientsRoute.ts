import express from 'express';
const router =express.Router();

import {setHello} from '../controlers/clientsCont'

router.get('/hello', setHello)

export default router;