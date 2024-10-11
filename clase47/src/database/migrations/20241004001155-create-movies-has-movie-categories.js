'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies_has_movie_categories', {
      movies_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'movies',
          key: 'id'
        }
      },
      movies_categories_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'movie_categories',
          key: 'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies_has_movie_categories');
  }
};