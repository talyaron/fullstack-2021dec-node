

import express from "express";
const router = express.Router();

import { initUsers, handleDeleteUser, handleAddUser } from "../cont/usersCont";

router
  .get("/user-get", initUsers)
  .delete("/user-delete", handleDeleteUser)
  .post("/user-add", handleAddUser)
export default router;