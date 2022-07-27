import express from "express";
const router = express.Router();
import jwt from "jwt-simple";
// import {isUser} from '../middleware/helpers';

export function isUser(req, res, next) {
  try {
    const { user } = req.cookies;
    if (!user) throw new Error("user cookie not found");

    const secret = process.env.JWT_SECRET;
    let decodedCookie = jwt.decode(user, secret);

    console.log("decodedCookie is:", decodedCookie);
    req.user = decodedCookie;
    console.log("req.user is:", req.user);

    next();
  } catch (error) {
    res.send({ error: error });
  }
}

import {
  register,
  login,
  getPlayerByCookie,
} from "../controllers/PlayerController";


// router
//   .post("/register", register)
//   .post("/login", login)
//   .get("/player-by-cookie", getPlayerByCookie);
// export default router;

router
  .post("/register", isUser, register)
  .post("/login", isUser, login)
  .get("/player-by-cookie", isUser, getPlayerByCookie);
export default router;
