import express from "express";
const router = express.route();

import { setHello } from "../conts/clientCont";
router.get("/hello", setHello);

export default router;