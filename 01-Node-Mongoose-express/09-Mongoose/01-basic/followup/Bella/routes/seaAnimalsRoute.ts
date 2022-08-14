import express from 'express';
const router = express.Router();

import {addSeaAnimal} from '../controls/seaAnimalsCont';

router
.post('/add-seaAnimal', addSeaAnimal)

export default router