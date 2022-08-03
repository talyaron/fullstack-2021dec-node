import express  from "express";
const router = express.Router();

import {addCat, searchCat, getCats} from '../controller/catsCont';

router.post('/catsList', addCat)
    .get('/catsList', getCats)
    .get('/searchCats', searchCat)

    export default router

