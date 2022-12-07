import express from "express";
const router = express.Router();

import {
  getRelationships,
  addRelationship,
  deleteRelationship,
} from "../controllers/relationshipsController";

router
  .get('/getRelationships', getRelationships)
  .post('/', addRelationship)
  .delete('/', deleteRelationship)
export default router;