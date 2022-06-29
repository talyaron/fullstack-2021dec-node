import express from 'express';
import { profileEdit} from '../controllers/userCont';
const router = express.Router();

router
.post('/profile-edit', profileEdit)

export default router