import express from "express";
const router = express.Router();

import {
    handleRegister,
    handleAddUser,
    updateUser,
    getUserByCookie,
    handleDelete,
    handleLogin,
    // handleSearchItems
    // handleGetUsers
} from "../cont/usersCont";

//
router
  .patch("/update-user",updateUser )
    .delete("/user-delete", handleDelete)
    .post("/add-user", handleAddUser)
    .post("/register", handleRegister)
    .post('/login', handleLogin)
    .get('get-user',getUserByCookie)
  // .get('users-search', handleSearchItems)
  // .get("/get-users", handleGetUsers)

export default router;
