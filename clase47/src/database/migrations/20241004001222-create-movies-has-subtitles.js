'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies_has_subtitles', {
      movies_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'movies',
          key: 'id'
        }
      },
      subtitles_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'subtitles',
          key: 'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies_has_subtitles');
  }
};