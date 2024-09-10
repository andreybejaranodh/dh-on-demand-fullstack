const express = require('express');

const upload = require('../middlewares/uploadMoviePoster');

const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/detail', movieController.detail);

module.exports = router;
