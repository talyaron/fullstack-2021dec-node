import express from 'express';
import { pushUser} from '../controllers/userCont';
const router = express.Router();

router
.post('/push-User', pushUser)

export default router