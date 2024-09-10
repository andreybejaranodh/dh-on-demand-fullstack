const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/user');


const controller = {
    login: (req, res) => {
        if (req.session.user) {
            return res.redirect('/');
        }
        res.render('user/login');
    },
    processLogin: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).render('user/login', {
                errors: errors.mapped()
            });
        }

        const { email, password, remember } = req.body;
        const user = User.findByField('email', email);

        if (user && bcrypt.compareSync(password, user.password)) {  
            req.session.user = {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                age: user.age
            };
            
            if (remember) {
                // s = 1000ms
                // m = 60s
                // h = 60m
                // d = 24h
                // w = 7d 
                res.cookie('userEmail', email, { maxAge: 1000 * 60 * 60 * 24 * 7 });
            }
            
            return res.redirect('/');
        }

        return res.status(422).render('user/login', {
            errors: {
                crendentials: { msg: 'Usuario y/o contraseña incorrectos!' }
            }
        });
    },
    logout: (req, res) => {
        delete req.session.user;
        res.clearCookie('userEmail');
        return res.redirect('/');
    }
};

module.exports = controller;