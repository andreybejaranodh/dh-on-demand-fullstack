'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('movies_has_movie_categories', [
      {
        movies_id: 1,
        movies_categories_id: 1
      },
      {
        movies_id: 2,
        movies_categories_id: 2
      },
      {
        movies_id: 3,
        movies_categories_id: 3
      },
      {
        movies_id: 4,
        movies_categories_id: 4
      },
      {
        movies_id: 5,
        movies_categories_id: 1
      },
      {
        movies_id: 6,
        movies_categories_id: 3
      },
      {
        movies_id: 7,
        movies_categories_id: 6
      },
      {
        movies_id: 8,
        movies_categories_id: 4
      },
      {
        movies_id: 9,
        movies_categories_id: 5
      },
      {
        movies_id: 10,
        movies_categories_id: 1
      },
      {
        movies_id: 11,
        movies_categories_id: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('movies_has_movie_categories', null, {truncate: true, cascade: true});
  }
};
