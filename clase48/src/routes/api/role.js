const express = require('express');

const roleApiController = require('../../controllers/api/roleApiController');

const router = express.Router();

router.post('/', roleApiController.create);
router.get('/', roleApiController.getAll);
router.get('/user', roleApiController.getRolesWithUsers);

module.exports = router;

