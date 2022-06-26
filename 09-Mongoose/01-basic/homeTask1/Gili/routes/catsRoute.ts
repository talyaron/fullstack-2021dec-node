import express from 'express';
const router = express.Router();

import {addCat, getAllCats} from '../controls/catsCont';

router
.post('/add-cat', addCat)
.get('/get-all-cats', getAllCats)

export default router