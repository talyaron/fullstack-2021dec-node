import express from 'express';
const router = express.Router();

import { postBook, getBook, updateDescription, updatePrice } from '../controlers/bookCont';


router.post('/booksStore', postBook)
        .get('/booksStore', getBook)
        .put('/updateBook', updateDescription)
        .put('/updateBook', updatePrice)
        .delete('/deleteBook');
export default router;