import express from 'express';
import { getAll, search } from './homeConts';

const router = express.Router();

router.post('/search',search);
router.get('/get', getAll)



export default router;