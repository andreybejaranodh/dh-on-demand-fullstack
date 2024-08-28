const path = require('path');
const { validationResult } = require('express-validator');

const controller = {
    login: (req, res) => {
        res.render('user/login');
    },
    processLogin: (req, res) => {
        const { email, password } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send(errors.mapped());
        }

        if (email === 'admin@email.com' && password === '12345678') {
            return res.redirect('/');
        }

        return res.redirect('/user/login');
    }
};

module.exports = controller;