
import express from 'express';
const router = express.Router();

import { 
  handleRegister,
  handleLogin,
} from "../controlers/usersControler";

router
  .post("/register", handleRegister)
  .post('/login', handleLogin)
export default router;


