const { Router } = require('express');
const { getIndex, postData, getOneUser } = require('../controlers');
const router = Router();

router
    .get('/get-index', getIndex)
    .post('/post-data', postData)
    .post('/get-one-user', getOneUser)

module.exports = router;