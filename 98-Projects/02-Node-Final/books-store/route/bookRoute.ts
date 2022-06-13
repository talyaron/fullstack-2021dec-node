import express from 'express';
const router = express.Router();

import { postBook, getBook, updateDetailsBook } from '../controlers/bookCont';


router.post('/booksStore', postBook)
        .get('/booksStore', getBook)
        .put('/updateBook', updateDetailsBook);
export default router;