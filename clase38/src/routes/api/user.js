const express = require('express');

const userApiController = require('../../controllers/api/userController');

const authorize = require('../../middlewares/authMiddleware');
const { createUserValidations, loginValidations } = require('../../middlewares/userValidations');

const router = express.Router();

router.use(authorize);

router.post('/', createUserValidations, userApiController.create);
router.post('/login', loginValidations, userApiController.login);

module.exports = router;