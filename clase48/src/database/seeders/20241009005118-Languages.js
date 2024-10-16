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
    await queryInterface.bulkInsert('languages', [
      {
        id: 1,
        name: 'Español',
      },
      {
        id: 2,
        name: 'Ingles',
      },
      {
        id: 3,
        name: 'Frances',
      },
      {
        id: 4,
        name: 'Italiano',
      },
      {
        id: 5,
        name: 'Portugues',
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
    await queryInterface.bulkDelete('languages', null, {truncate: true, cascade: true});

  }
};
