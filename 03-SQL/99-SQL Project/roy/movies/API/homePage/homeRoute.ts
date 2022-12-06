import express from 'express';

import { addFav, getAll, getMyFav, getSearchResult, search } from './homeConts';

const router = express.Router();

router.post('/search',search);
router.get('/get', getAll)
router.get('/search',getSearchResult);
router.get('/search',getMyFav);
router.post('/add', addFav)


export default router;