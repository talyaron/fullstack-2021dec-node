
import express from "express";
const router = express.Router();
import {handleRegister,handleLogin, toNextPage,handleUpdate,handleSubmit} from "../controllers/UserController";

router
  .post("/register", handleRegister)
  .post("/login", handleLogin)
  .get("/get-user", toNextPage)
  .post("/submit", handleSubmit)
  .patch("/update", handleUpdate)
export default router;


