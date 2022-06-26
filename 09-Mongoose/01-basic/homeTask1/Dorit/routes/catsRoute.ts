import express from 'express';
const router = express.Router();
import {addCat,getAllCats} from '../controls/catsCont';

router
.get('/get-all-cats', getAllCats)
.post('/add-cat', addCat)
export default router