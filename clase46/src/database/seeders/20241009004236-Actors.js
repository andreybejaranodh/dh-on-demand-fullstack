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
    await queryInterface.bulkInsert('actors', [
      {
        name: 'John Doe',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'John Doe is an actor'
      },
      {
        name: 'Jane Doe',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Jane Doe is an actor'
      },
      {
        name: 'Jack Doe',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Jack Doe is an actor'
      },
      {
        name: 'Megan Fox',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Megan Fox is an actor'
      },
      {
        name: 'Johnny Depp',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Johnny Depp is an actor'
      },
      {
        name: 'Leonardo DiCaprio',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Leonardo DiCaprio is an actor'
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
    await queryInterface.bulkDelete('actors', null, {});
  }
};
