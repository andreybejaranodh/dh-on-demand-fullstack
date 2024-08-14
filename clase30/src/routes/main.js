const express = require('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

// Definimos las rutas
router.get('/', mainController.index);
router.get('/about', mainController.about);

module.exports = router;