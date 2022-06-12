import express from 'express';
const router = express.Router();

import { postBook, getBook } from '../controlers/bookCont';


router.post('/booksStore', postBook)
        .get('/booksStore', getBook);

export default router;