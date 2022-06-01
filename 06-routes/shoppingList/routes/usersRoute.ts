import express from "express";
const router = express.Router();
import {
  getAllUsers,
  updateUser,
} from "../cont/usersCont";

  .get("/get-users", getAllUsers)
  .patch("/update-user", updateUser)
router
export default router;
  .delete("/user-delete", handleDeleteUser)
  .post("/user-add", handleAddUser)