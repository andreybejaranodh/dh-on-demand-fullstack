const path = require('path');

const Genre = require("../models/genre");
const Movie = require("../models/movie");

const controller = {
    detail: (req, res) => {
        return res.sendFile(path.join(__dirname, '../views/movieDetail.html'));
    }
}

module.exports = controller;