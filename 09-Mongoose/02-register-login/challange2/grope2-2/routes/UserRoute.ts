
import express from "express";
const router = express.Router();
import * as UserControler from "../controllers/UserController";

router
  .post("/register", UserControler.handleRegister)
  .post("/login", UserControler.handleLogin)
  .get("/get-user", UserControler.toNextPage)
  .post("/submit", UserControler.handleSubmit)
  .patch("/update", UserControler.handleUpdate)
export default router;


