"use strict";
// import express from "express";
// const router = express.Router();
exports.__esModule = true;
var express_1 = require("express");
var router = express_1.Router();
var task_1 = require("../controllers/task");
router
    .get('/get-all-tasks', task_1.getTasks)
    .post('/save-task', task_1.saveTask);
exports["default"] = router;
