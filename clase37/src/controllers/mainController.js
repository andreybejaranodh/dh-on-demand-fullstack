const path = require('path');

const MovieModel = require('../models/movie');

const controller = {
    index: (req, res) => {
        const movies = MovieModel.findAll();
        res.render('index', { movies });
    },
    about: (req, res) => {
       res.render('about');
    },
    getLogs: (req, res) => {
        res.sendFile(path.join(__dirname, '../../log.txt'));
    }
};

module.exports = controller;