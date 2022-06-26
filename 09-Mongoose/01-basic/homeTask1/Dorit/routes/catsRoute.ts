import express from 'express';
const router = express.Router();
import {addCat,getAllCats,filterCatsByAge} from '../controls/catsCont';

router
.get('/get-all-cats', getAllCats)
.get('/filter-cats-by-age', filterCatsByAge)
.post('/add-cat', addCat)
export default router