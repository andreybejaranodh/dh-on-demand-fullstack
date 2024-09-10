const express = require('express');

const mainController = require('../controllers/mainController');

const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

router.get('/', mainController.index);

module.exports = router;