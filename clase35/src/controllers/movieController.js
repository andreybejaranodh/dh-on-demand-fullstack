const Genre = require("../models/genre");
const Movie = require("../models/movie");

const controller = {
    create: (req, res) => {
        const genres = Genre.findAll();
        res.render('movie/create', { genres });
    },
    store: (req, res) => {
        const { title, description, genre, directors, cast } = req.body;

        Movie.create({
            title,
            description,
            poster: req.file.filename,
            genre,
            directors: directors.split(',').map(d => d.trim()),
            cast: cast.split(',').map(c => c.trim())
        });

        res.redirect('/');
    }
}

module.exports = controller;