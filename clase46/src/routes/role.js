const express = require('express');

const roleController = require('../controllers/roleController');

const router = express.Router();

router.post('/', roleController.create);
router.get('/', roleController.getAll);
router.get('/user', roleController.getRolesWithUsers);

module.exports = router;

