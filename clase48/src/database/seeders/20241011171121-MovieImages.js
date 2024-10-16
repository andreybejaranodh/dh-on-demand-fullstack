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
    await queryInterface.bulkInsert('movie_images', [
      {
        id: 1,
        url: 'inception.jpg',
        movies_id: 1
      },
      {
        id: 2,
        url: 'shawshank.jpg',
        movies_id: 2
      },
      {
        id: 3,
        url: 'batman.jpeg',
        movies_id: 3
      },
      {
        id: 4,
        url: 'pulp_fiction.jpg',
        movies_id: 4
      },
      {
        id: 5,
        url: 'matrix.jpg',
        movies_id: 5
      },
      {
        id: 6,
        url: 'gladiador.jpg',
        movies_id: 6
      },
      {
        id: 7,
        url: 'titanic.jpg',
        movies_id: 7
      },
      {
        id: 8,
        url: 'good_fellas.jpg',
        movies_id: 8
      },
      {
        id: 9,
        url: 'parasite.jpg',
        movies_id: 9
      },
      {
        id: 10,
        url: 'interstellar.jpg',
        movies_id: 10
      },
      {
        id: 11,
        url: 'garfield.jpg',
        movies_id: 11
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
    await queryInterface.bulkDelete('movie_images', null, {truncate: true, cascade: true});
  }
};
