var express = require("express");
const indexController = require("../controllers/indexController");
var router = express.Router();

/* GET home page. */
router.get("/", indexController.home);

/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.send("contact form");
});

module.exports = router;
