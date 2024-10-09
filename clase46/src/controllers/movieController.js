const db = require('../database/models');

const controller = {
    getAll: async (req, res) => {
        try {
            const movies = await db.Movie.findAll({
                include: ['categories']
            });
            return res.json(movies);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = controller;