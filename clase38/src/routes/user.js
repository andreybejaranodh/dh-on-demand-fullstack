const express = require('express');

const userController = require('../controllers/userController');
const { loginValidations } = require('../middlewares/userValidations');

const router = express.Router();

router.get('/login', userController.login);
router.post('/login', loginValidations, userController.processLogin);
router.get('/logout', userController.logout);

module.exports = router;