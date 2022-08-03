import express from "express";
const router = express.Router();
import jwt from "jwt-simple";
import { getItems, addItem } from "../controllers/ItemController";


function isUser(req: any, res: any, next: any) {
  try {
    const { user } = req.cookies; 
    if (!user) throw new Error("no cookie on path");

    const secret = process.env.JWT_SECRET;
    let decodedCookie = jwt.decode(user, secret);
    console.log(decodedCookie);

    req.user = decodedCookie;

    // const { role } = decodedCookie;
    // if (role !== "admin") {
      
    //   res.status(403).send({ error: "Not authorized" });
    // } else {
    //   next();
    // }

    next();
  } catch (error) {
    res.send({ error: error.message });
  }
}

router
.get("/get-item", isUser, getItems)
.post("/add", isUser, addItem)
export default router;
