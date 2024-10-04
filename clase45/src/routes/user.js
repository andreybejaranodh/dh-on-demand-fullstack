const express = require('express');

const userController = require('../controllers/userController');

const { createUserValidations, loginValidations } = require('../middlewares/userValidations');

const router = express.Router();

router.post('/', createUserValidations, userController.create);
router.post('/login', loginValidations, userController.login);

module.exports = router;