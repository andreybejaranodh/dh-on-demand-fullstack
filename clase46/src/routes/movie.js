const express = require('express');

const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/', movieController.getAll);

module.exports = router;

