import express from "express";
const router = express.Router();

import {
  initStore,
  deleteAlbum,
  addAlbum,
  updateAlbum,
  searchAlbum,
  selectTypeAlbum,
  handleDoubleClick,
} from "../controlers/recordsCont";

router
  .get("/albums-all", initStore)
  .post("/album-delete", deleteAlbum)
  .post("/album-add", addAlbum)
  .put("/album-update", updateAlbum)
  .get("/search", searchAlbum)
  .get("/select-type", selectTypeAlbum)
  .post("/album-clicked", handleDoubleClick);
export default router;
