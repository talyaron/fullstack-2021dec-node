import express from 'express';
import {addCat, getAllCats, findCats, findCatsExpert} from '../cont/catsCont'
const router = express.Router();




router
.post('/addCat', addCat)
.get('/getAllCats', getAllCats)
.patch('/findCats', findCats)
.patch('/findCatsExpert', findCatsExpert)

export default router
