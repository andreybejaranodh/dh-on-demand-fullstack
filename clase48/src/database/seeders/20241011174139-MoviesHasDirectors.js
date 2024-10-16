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
    const data = [
      {
        movies_id: 1,
        directors: [1]
      },
      {
        movies_id: 2,
        directors: [2]
      },
      {
        movies_id: 3,
        directors: [1]
      },
      {
        movies_id: 4,
        directors: [3]
      },
      {
        movies_id: 5,
        directors: [4, 5]
      },
      {
        movies_id: 6,
        directors: [6]
      },
      {
        movies_id: 7,
        directors: [7]
      },
      {
        movies_id: 8,
        directors: [8]
      },
      {
        movies_id: 9,
        directors: [9]
      },
      {
        movies_id: 10,
        directors: [1]
      },
      {
        movies_id: 11,
        directors: [10]
      }
    ];
    await queryInterface.bulkInsert('movies_has_directors', 
      data.flatMap(element => element.directors
        .map(directorId => ({ movies_id: element.movies_id, directors_id: directorId }))), 
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('movies_has_directors', null, { truncate: true, cascade: true });
  }
};
