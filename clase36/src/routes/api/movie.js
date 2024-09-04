const express = require('express');

const movieApiController = require('../../controllers/api/movieController');

const upload = require('../../middlewares/uploadMoviePoster');
const { createMovieApiValidations } = require('../../middlewares/movieValidator');
const authorize = require('../../middlewares/authMiddleware');

const router = express.Router();

router.use(authorize);

router.get('/', movieApiController.list);
router.get('/:id', movieApiController.detail);
router.post('/', upload.single('poster'), createMovieApiValidations, movieApiController.create);
router.put('/:id', upload.single('poster'), createMovieApiValidations, movieApiController.update);
router.delete('/:id', movieApiController.delete);

module.exports = router;