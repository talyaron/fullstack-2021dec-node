import express from 'express';
const router = express.Router();

import { postStory } from '../controlers/storyCont';
import { getStory } from '../controlers/storyCont';


router.post('/onGo_story', postStory)
router.get('/onGo_story', getStory)

export default router;