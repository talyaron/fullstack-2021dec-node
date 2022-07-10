"use strict";

var _require = require('express'),
    Router = _require.Router;

var _require2 = require('../controlers'),
    getIndex = _require2.getIndex,
    postData = _require2.postData,
    getOneUser = _require2.getOneUser;

var router = Router();
router.get('/get-index', getIndex).post('/post-data', postData).post('/get-one-user', getOneUser);
module.exports = router;