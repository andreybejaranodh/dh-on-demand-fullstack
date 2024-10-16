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
   await queryInterface.bulkInsert('movies_has_languages', [
     {
       movies_id: 1,
       languages_id: 1
     },
     {
       movies_id: 2,
       languages_id: 1
     },
     {
       movies_id: 3,
       languages_id: 1
     },
     {
       movies_id: 4,
       languages_id: 1
     },
     {
       movies_id: 5,
       languages_id: 1
     },
     {
       movies_id: 6,
       languages_id: 1
     },
     {
       movies_id: 7,
       languages_id: 1
     },
     {
       movies_id: 8,
       languages_id: 1
     },
     {
       movies_id: 9,
       languages_id: 1
     },
     {
       movies_id: 10,
       languages_id: 1
     },
     {
       movies_id: 11,
       languages_id: 1
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
    await queryInterface.bulkDelete('movies_has_languages', null, {truncate: true, cascade: true});
  }
};
