const { body } = require('express-validator');

const createMovieApiValidations = [
    body('title')
        .notEmpty()
        .withMessage('Title is required')
        .isString()
        .withMessage('Title must be a string'),
    body('description')
        .notEmpty()
        .withMessage('Description is required')
        .isString()
        .withMessage('Description must be a string'),
    body('genre')
        .notEmpty()
        .withMessage('Genre is required')
        .isString()
        .withMessage('Genre must be a string'),
]

module.exports = { createMovieApiValidations };