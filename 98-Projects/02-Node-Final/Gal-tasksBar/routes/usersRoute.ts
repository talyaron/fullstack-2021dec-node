import express from "express";
const router = express.Router();
import {
    handleAddUser,
    getUser,
    updateUser,
    getAllUsers,
    handleDeleteUser
} from "../cont/usersCont";

//
router
  .get("/get-users", getAllUsers)
  .patch("/update-user",updateUser )
  .delete("/user-delete", handleDeleteUser )
  .post("/user-add", handleAddUser)
//   .post('/get-user',getUser)
  //   .post('/login', login)
  // .get('get-user',getUserByCookie)
  

export default router;
