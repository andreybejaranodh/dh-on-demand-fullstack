const express = require('express');

const roleController = require('../controllers/roleController');

const router = express.Router();

router.post('/', roleController.create);
router.get('/', roleController.getAll);

module.exports = router;

