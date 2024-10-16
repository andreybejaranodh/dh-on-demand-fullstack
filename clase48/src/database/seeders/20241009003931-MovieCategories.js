'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('movie_categories', [
      {
        id: 1,
        name: "Ciencia Ficción"
      },
      {
        id: 2,
        name: "Drama"
      },
      {
        id: 3,
        name: "Acción"
      },
      {
        id: 4,
        name: "Crimen"
      },
      {
        id: 5,
        name: "Suspenso"
      },
      {
        id: 6,
        name: "Romance"
      },
      {
        id: 7,
        name: "Terror"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('movie_categories', null, {truncate: true, cascade: true});
  }
};
