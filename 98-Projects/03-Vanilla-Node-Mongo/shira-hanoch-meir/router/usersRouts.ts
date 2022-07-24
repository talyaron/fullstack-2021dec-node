import express  from "express";
const route = express.Router();

import { register, login, coachLogin} from "../controller/usersCont";


route
    .post('/register', register)
    .post('/login', login)
    .post('/coachLogin', coachLogin)

    export default route;