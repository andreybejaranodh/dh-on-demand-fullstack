const express = require('express');

const mainController = require('../controllers/mainController');

const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/logs', adminMiddleware, mainController.getLogs);

module.exports = router;