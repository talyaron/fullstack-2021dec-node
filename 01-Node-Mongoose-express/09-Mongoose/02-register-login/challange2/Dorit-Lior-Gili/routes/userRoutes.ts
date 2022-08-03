import express from 'express';
import { getUser, editUser, register, login } from '../controller/userCtrl';
const router: express.Router = express.Router();

router
    // .get(`/get-user`, getUser)
    .post('/user-register', register)
    .post('/user-login', login)
    .post('/get-user', getUser)
    .patch('/edit-user', editUser)


export default router;

