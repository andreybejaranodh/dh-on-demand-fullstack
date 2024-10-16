const { validationResult } = require('express-validator');

const db = require('../../database/models');

const jwt = require('../../helpers/jwt');

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
            password,
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
    },
    getAll: async(req, res) => {
        try {
            const users = await db.User.findAll({
                attributes: {
                    exclude: ['password', 'roles_id']
                },
                include: ['role']
            });
            return res.json(users);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    getById: async(req, res) => {
        try {
            const { id } = req.params;
            const user = await db.User.findByPk(id, {
                attributes: {
                    exclude: ['password', 'roles_id']
                },
                include: ['role']
            });
            return res.json(user);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
};

module.exports = controller;