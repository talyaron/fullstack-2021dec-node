import express from "express";
const router = express.Router();

import {
  getRelationships,
  addRelationship,
  deleteRelationship,
} from "../controllers/relationshipsController";

router
  .get("/getRelationships", getRelationships)
  .post("/addRelationship", addRelationship)
  .delete("/deleteRelationship", deleteRelationship);
export default router;