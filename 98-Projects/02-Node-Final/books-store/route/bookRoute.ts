import express from 'express';
const router = express.Router();

import { postBook, getBook, updateDescription, updatePrice, deleteBook, clientGet, clientCartPost, cartGet, deleteBookCart} from '../controlers/bookCont';


router.post('/booksStore', postBook)
        .get('/booksStore', getBook)
        .put('/updateDesc', updateDescription)
        .put('/updatePrice', updatePrice)
        .delete('/deleteBook', deleteBook)
        .get('/clientGet', clientGet)
        .post('/clientCart', clientCartPost)
        .get('/clientCart', cartGet)
        .delete('/deleteCart', deleteBookCart)
        
export default router;