const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const jwt = require('../../helpers/jwt');

const User = require('../../models/user');

const controller = {
    create: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.mapped()
            });
        }
        const { email, password, name, age } = req.body;
        User.create({
            email,
            password: bcrypt.hashSync(password, 10),
            name,
            age: Number(age),
            role: 'user'
        });
        res.status(201).json({
            message: 'User created'
        });
    },
    login: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.mapped()
            });
        }

        const { email, password } = req.body;
        const user = User.findByField('email', email);

        if (user && bcrypt.compareSync(password, user.password)) {   
            const token = jwt.encode({ isAuthorized: true, id: user.id, role: user.role });
            return res.status(200).json({
                token
            });
        }

        return res.status(401).json({
            message: 'Invalid credentials'
        });
    }
};

module.exports = controller;