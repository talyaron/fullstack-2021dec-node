"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var UserController_1 = require("../controllers/UserController");
router
    .post("/register", UserController_1.register)
    .post("/login", UserController_1.login)
    .get("/player-by-cookie", UserController_1.getPlayerByCookie);
exports["default"] = router;
// router
//   .post("/register", isUser, register)
//   .post("/login", isUser, login)
//   .get("/player-by-cookie", isUser, getPlayerByCookie);
// export default router;
