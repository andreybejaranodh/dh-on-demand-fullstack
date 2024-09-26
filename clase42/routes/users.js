var express = require("express");
const usersController = require("../controllers/usersController");
var router = express.Router();

/* GET users listing. */
router.get("/", usersController.userList);

/* GET login form. */
router.get("/login", usersController.loginForm);

/* GET register form. */
router.get("/register", usersController.registerForm);

module.exports = router;
