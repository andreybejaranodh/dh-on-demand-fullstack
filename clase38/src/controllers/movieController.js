const Genre = require("../models/genre");
const Movie = require("../models/movie");

const controller = {
    detail: (req, res) => {
        return res.render('movie/detail');
    }
}

module.exports = controller;