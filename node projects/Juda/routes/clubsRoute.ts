import express from "express";
const router = express.Router();

import { getSearchData } from "../cont/clubsCont";

router
  .post("/findClub", getSearchData)



export default router;