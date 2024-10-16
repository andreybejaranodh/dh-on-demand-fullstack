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
    const data = [
      {
        movies_id: 1,
        actors: [1, 2, 3]
      },
      {
        movies_id: 2,
        actors: [4, 5, 6]
      },
      {
        movies_id: 3,
        actors: [7, 8, 9]
      },
      {
        movies_id: 4,
        actors: [10, 11, 12]
      },
      {
        movies_id: 5,
        actors: [13, 14, 15]
      },
      {
        movies_id: 6,
        actors: [16, 17, 18]
      },
      {
        movies_id: 7,
        actors: [1, 19, 20]
      },
      {
        movies_id: 8,
        actors: [21, 22, 23]
      },
      {
        movies_id: 9,
        actors: [24, 15, 26]
      },
      {
        movies_id: 10,
        actors: [27, 28, 29]
      },
      {
        movies_id: 11,
        actors: [30, 12, 31]
      }
    ];
    await queryInterface.bulkInsert('movies_has_actors', 
      data.flatMap(element => element.actors
        .map(actorId => ({ movies_id: element.movies_id, actors_id: actorId }))), 
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('movies_has_actors', null, { truncate: true, cascade: true });
  }
};
