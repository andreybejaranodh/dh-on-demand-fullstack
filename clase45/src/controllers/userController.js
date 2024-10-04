const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../database/models');

const jwt = require('../helpers/jwt');

const controller = {
    create: async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.mapped()
            });
        }
        const { name, email, password } = req.body;
        const role = await db.Role.findOne({ where: { name: 'user' } });
        const userToCreate = {
            email,
            password: bcrypt.hashSync(password, 10),
            name,
            roles_id: role.id
        };
        await db.User.create(userToCreate);
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