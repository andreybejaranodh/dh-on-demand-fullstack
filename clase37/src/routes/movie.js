const express = require('express');

const upload = require('../middlewares/uploadMoviePoster');

const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/create', movieController.create);
router.post('/create', upload.single('poster'), movieController.store);

module.exports = router;
