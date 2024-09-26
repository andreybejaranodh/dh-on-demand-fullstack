const express = require("express");
const router = express.Router();
const { moviesList } = require("../controllers/moviesController");

// MovieList
router.get("/", moviesList);

module.exports = router;
