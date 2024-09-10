const { validationResult } = require('express-validator');

const MovieModel = require('../../models/movie');

const controller = {
    list: (req, res) => {
        const movies = MovieModel.findAll();
        const response = {
            data: movies,
            metadata: {
                status: 200,
                total: movies.length
            }
        }
        res.json(response);
    },

    detail: (req, res) => {
        const movie = MovieModel.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({
                message: 'Movie not found'
            });
        }

        const response = {
            data: movie,
            metadata: {
                status: 200
            }
        }
        res.json(response);
    },

    create: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.mapped()
            });
        }

        const { title, description, genre, directors, cast } = req.body;

        MovieModel.create({
            title,
            description,
            poster: req.file?.filename,
            genre,
            directors,
            cast
        });

        res.status(201).json({
            message: 'Movie created'
        });
    },

    update: (req, res) => {
        const { id } = req.params;

        const { title, description, genre, directors, cast } = req.body;

        const movieFound = MovieModel.findById(id);

        if (!movieFound) {
            return res.status(404).json({
                message: 'Movie not found'
            });
        }

        MovieModel.update(id, {
            title,
            description,
            poster: req.file?.filename,
            genre,
            directors,
            cast
        });

        res.status(202).json({ message: 'Movie updated' });
    },

    delete: (req, res) => {
        const { id } = req.params;
        const movieFound = MovieModel.findById(id);

        if (!movieFound) {
            return res.status(404).json({
                message: 'Movie not found'
            });
        }

        MovieModel.delete(id);
        res.status(202).json({ message: 'Movie deleted' });
    }
}

module.exports = controller;