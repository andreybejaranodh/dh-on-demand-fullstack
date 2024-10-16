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
    await queryInterface.bulkInsert('movies_has_subtitles', [
      {
        movies_id: 1,
        subtitles_id: 1
      },
      {
        movies_id: 2,
        subtitles_id: 1
      },
      {
        movies_id: 3,
        subtitles_id: 1
      },
      {
        movies_id: 4,
        subtitles_id: 1
      },
      {
        movies_id: 5,
        subtitles_id: 1
      },
      {
        movies_id: 6,
        subtitles_id: 1
      },
      {
        movies_id: 7,
        subtitles_id: 1
      },
      {
        movies_id: 8,
        subtitles_id: 1
      },
      {
        movies_id: 9,
        subtitles_id: 1
      },
      {
        movies_id: 10,
        subtitles_id: 1
      },
      {
        movies_id: 11,
        subtitles_id: 1
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
    await queryInterface.bulkDelete('movies_has_subtitles', null, {truncate: true, cascade: true});
  }
};
