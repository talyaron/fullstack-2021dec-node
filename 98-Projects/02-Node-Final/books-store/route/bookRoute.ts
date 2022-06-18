import express from 'express';
const router = express.Router();

import { postBook, getBook, updateDescription, updatePrice, deleteBook} from '../controlers/bookCont';


router.post('/booksStore', postBook)
        .get('/booksStore', getBook)
        .put('/updateDesc', updateDescription)
        .put('/updatePrice', updatePrice)
        .delete('/deleteBook', deleteBook)
        .get('/clientGet', getBook)
export default router;