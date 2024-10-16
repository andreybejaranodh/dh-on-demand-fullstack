const {Op} = require('sequelize');

const db = require('../../database/models');

const controller = {
    getAll: async (req, res) => {
        try {
            const {page = 1, limit = 10, title} = req.query;
            const movies = await db.Movie.findAll({
                ...(title ? {
                    where: {
                        title: {
                            [Op.like]: `%${title}%`
                        }
                    }
                } : undefined),
                include: ['categories', 'images', 'actors', 'directors', 'languages', 'subtitles'],
                limit: Number(limit),
                offset: (Number(page) - 1) * Number(limit)
            });
            const total = await db.Movie.count();
            const totaPages = Math.ceil(total / Number(limit));
            return res.json({
                metadata: {
                    limit: Number(limit),
                    page: Number(page),
                    total,
                    totaPages
                },
                data: movies
            });
        } catch (error) {
            return res.status(500).send(error);
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const movie = await db.Movie.findByPk(id, {
                include: ['categories', 'images', 'actors', 'directors', 'languages', 'subtitles']
            });
            if (!movie) {
                return res.status(404).send({
                    message: 'Movie not found'
                });
            }
            return res.json(movie);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = controller;