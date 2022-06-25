import express from "express";
const router = express.Router();

import {
    handleRegister,
    handleAddUser,
    updateUser,
    getUserByCookie,
    handleDelete,
    getUsers,
    handleLogin,
    // handleSearchItems
} from "../cont/usersCont";

//
router
    .get("/get-users", getUsers)
  .patch("/update-user",updateUser )
    .delete("/user-delete", handleDelete)
    .post("/add-user", handleAddUser)
    .post("/register", handleRegister)
    .post('/login', handleLogin)
    .get('get-user',getUserByCookie)
  // .get('users-search', handleSearchItems)

export default router;
