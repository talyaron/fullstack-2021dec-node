import express from 'express';
const router = express.Router();
import {getAllUsers} from '../controlers/usersCont';


router.get('/get_users',getAllUsers)

export default router;