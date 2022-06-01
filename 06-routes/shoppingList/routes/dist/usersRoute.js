"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersCont_1 = require("../cont/usersCont");
<<<<<<< HEAD
router.get('/api/get-users', usersCont_1.getUsers);
exports["default"] = router;
// import { User } from "../model/userModel";
// {
//   getUsers
//   // addUser,
//   // deleteUser,
// }
// from "../controlers/usersCont";
// import {getUsers} from "../cont/usersCont"
//   router.get('/api/get-users',getUsers)
// export default router;
=======
router
    .get("/get-users", usersCont_1.getAllUsers)
    .patch("/update-user", usersCont_1.updateUser);
exports["default"] = router;
>>>>>>> group1
