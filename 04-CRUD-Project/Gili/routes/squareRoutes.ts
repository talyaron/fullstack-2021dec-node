import express from 'express';
const router = express.Router();
import { getTableStatus, resetGame, nextTurn, hellofunction } from '../controlers/squreCont';

router
  .patch('/reset-game', resetGame)
  .post('/next-turn', nextTurn)


export default router;
