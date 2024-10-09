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
    await queryInterface.bulkInsert('movies', [
      {
        title: 'Spider-Man',
        description: 'Spider-Man is a fictional character appearing in American comic books published by Marvel Comics.',
        length: 120,
        release_date: new Date('2021-01-01'),
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    await queryInterface.bulkInsert('movies_has_movie_categories', [
      {
        movies_id: 1,
        movies_categories_id: 1
      },
      {
        movies_id: 1,
        movies_categories_id: 3
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
    await queryInterface.bulkDelete('movies', null, {});
    await queryInterface.bulkDelete('movies_has_movie_categories', null, {});
  }
};
