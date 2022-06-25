import express from 'express';
const router = express.Router();

import {
    getkittens,
    searchKitten
} from '../controls/catsCont';

router
.get('/get-kittens', getkittens)
.post('/search-kitten', searchKitten)



export default router