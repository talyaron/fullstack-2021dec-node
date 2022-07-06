
import express from 'express';
const router = express.Router();

import { 
  handleRegister,
  handleLogin,
  getUser
} from "../controlers/usersControler";

router
  .post("/register", handleRegister)
  .post('/login', handleLogin)
  .get('/get-user', getUser)
export default router;


