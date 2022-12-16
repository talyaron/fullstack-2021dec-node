import express from 'express';

import { addFav, getAll, getMovies, getMyFav, getSearchResult, search } from './homeConts';

const router = express.Router();

router.post('/search', search);
router.get('/get', getAll)
router.get('/search', getSearchResult);
router.post('/present', getMyFav);
router.post('/add', addFav);
router.post('/fav', getMovies)


export default router;