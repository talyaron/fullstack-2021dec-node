import express from 'express';
const router = express.Router();
import jwt from 'jwt-simple';

import {
  register,
  login,
  getUserByCookie,
} from "../controllers/UserController";

function isUser(req, res, next) {
  try {
    const { user } = req.cookies;
    if (!user) throw new Error("user cookie not found");

    const secret = process.env.JWT_SECRET;
    let decodedCookie = jwt.decode(user, secret);
    console.log(' is:decodedCookie is:', decodedCookie);

    // const { role } = decodedCookie;
    // if(role !== 'admin') {
    //     res.status(403).send({error: 'Not authorized'});
    // } else {
    //     next();
    // }

    next();
  } catch (error) {
    res.send({ error: error });
  }
}

router
  .post("/register", register)
  .post("/login", login)
  .get("/user-by-cookie", isUser, getUserByCookie);
export default router;