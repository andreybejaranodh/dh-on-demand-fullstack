const express = require('express');

const controller = require('../../controllers/api/authorizationController');

const router = express.Router();

router.get('/token', controller.requestToken);

module.exports = router;