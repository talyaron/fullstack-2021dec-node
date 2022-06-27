import express from 'express';
const router = express.Router();

import {addCat, getAllCats, filterCatsByAge} from '../controls/catsCont';

router
.post('/add-cat', addCat)
.get('/get-all-cats', getAllCats)
.patch('/get-cats-age', filterCatsByAge)

export default router