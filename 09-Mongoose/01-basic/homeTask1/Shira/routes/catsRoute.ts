import express from 'express';
const router = express.Router();

import {addCat} from '../controllers/catsCont';

router
.post('/add-cat',addCat)

export default router;