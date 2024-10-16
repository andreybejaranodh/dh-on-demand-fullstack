const express = require('express');

const movieApiController = require('../../controllers/api/movieApiController');

const router = express.Router();

router.get('/', movieApiController.getAll);
router.get('/:id', movieApiController.getById);

module.exports = router;

