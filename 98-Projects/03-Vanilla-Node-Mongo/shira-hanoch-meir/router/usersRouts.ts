import express  from "express";
const route = express.Router();

import { register, login } from "../controller/usersCont";


route.post('/register', register)
    .post('/login', login)

    export default route;