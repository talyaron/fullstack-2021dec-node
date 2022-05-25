
import express from 'express';
const router = express.Router();

import 
  {getAllUsers} from "./controlers/usersCont"

router
.get('/users/get-all-users');

export default router;
