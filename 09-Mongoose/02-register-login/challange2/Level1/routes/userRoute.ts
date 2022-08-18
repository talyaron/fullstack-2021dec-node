
import express from 'express';
const router = express.Router();

import { 
  handleRegister,
  handleLogin,
  getUser
} 
from "../conts/userCont"

router
  .post("/register", handleRegister)
  .post('/login', handleLogin)
  .get('/get-user', getUser)
export default router;
