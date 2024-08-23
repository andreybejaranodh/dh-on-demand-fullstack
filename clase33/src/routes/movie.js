const express = require('express');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img/movies'))
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const fieldname = Date.now() + ext;
        cb(null, fieldname)
    }
})

const upload = multer({ storage: storage })

const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/create', movieController.create);
router.post('/create', upload.single('poster'), movieController.store);

module.exports = router;
