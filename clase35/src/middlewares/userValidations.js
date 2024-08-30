const { body } = require('express-validator');

const loginValidations = [
    body('email')
        .notEmpty()
        .withMessage('El email no puede estar vacio')
        .isEmail()
        .withMessage('Email no es valido'),
    body('password')
        .notEmpty()
        .withMessage('La contraseña no puede estar vacia')
];

module.exports = { loginValidations };