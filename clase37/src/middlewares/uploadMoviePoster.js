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
});

const upload = multer({ storage });

module.exports = upload;