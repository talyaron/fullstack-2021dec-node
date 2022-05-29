import express from "express";
const router = express.Router();
import {getUsers} from '../cont/usersCont'

router.get('/api/get-users',getUsers)

export default router;

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

