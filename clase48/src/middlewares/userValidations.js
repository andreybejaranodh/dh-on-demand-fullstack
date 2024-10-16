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

const createUserValidations = [
    body('email')
        .notEmpty()
        .withMessage('El email no puede estar vacio')
        .isEmail()
        .withMessage('Email no es valido'),
    body('password')
        .notEmpty()
        .withMessage('La contraseña no puede estar vacia')
        .isLength({ min: 6 })
        .withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede estar vacio'),
    body('age')
        .optional()
        .isNumeric()
        .withMessage('La edad debe ser un numero')
];

module.exports = { loginValidations, createUserValidations };