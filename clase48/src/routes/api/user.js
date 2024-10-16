const express = require('express');

const userApiController = require('../../controllers/api/userApiController');

const { createUserValidations, loginValidations } = require('../../middlewares/userValidations');

const router = express.Router();

router.post('/', createUserValidations, userApiController.create);
router.post('/login', loginValidations, userApiController.login);
router.get('/', userApiController.getAll);
router.get('/:id', userApiController.getById);

module.exports = router;