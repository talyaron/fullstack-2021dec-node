import express from 'express';
const router = express.Router();

import{getCookie} from "../controller/controller"

router.get('/cookie',getCookie )

export default router;