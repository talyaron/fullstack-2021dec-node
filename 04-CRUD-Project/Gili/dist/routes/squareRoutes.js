"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const squreCont_1 = require("../controlers/squreCont");
router
    .get("/get-table-status", squreCont_1.getTableStatus)
    .patch("/reset-game", squreCont_1.resetGame)
    .post("/next-turn", squreCont_1.nextTurn);
exports.default = router;
//# sourceMappingURL=squareRoutes.js.map