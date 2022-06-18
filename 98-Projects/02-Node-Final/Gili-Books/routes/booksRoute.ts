import express from 'express';
const router = express.Router();
import { getUserBooks, deleteBook, addBook, markAsRead, getABook, markCurrently, addFavorite } from '../cont/booksCont';

//
router
	.get('/get-Books', getUserBooks)
	.delete('/delete-book', deleteBook)
	.post('/add-Book', addBook)
	.patch('/mark-as-read', markAsRead)
	.get('/get-a-book', getABook)
	.patch('/mark-currently', markCurrently)
	.patch('/add-Favorite', addFavorite);
export default router;
