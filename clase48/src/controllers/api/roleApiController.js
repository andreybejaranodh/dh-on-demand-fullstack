const db = require('../../database/models');

const controller = {
    create: async (req, res) => {
        try {
            const { name } = req.body;

            const role = await db.Role.create({ name });
            return res.status(201).json(role);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const roles = await db.Role.findAll();
            return res.json(roles);
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    getRolesWithUsers: async (req, res) => {
        try {
            const roles = await db.Role.findAll({
                include: [{
                    association: 'users',
                    attributes: {
                        exclude: ['password']
                    }
                }]
            });
            return res.json(roles);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
};

module.exports = controller;