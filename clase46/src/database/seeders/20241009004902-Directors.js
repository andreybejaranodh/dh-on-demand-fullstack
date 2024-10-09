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
    await queryInterface.bulkInsert('directors', [
      {
        name: 'John Doe',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'John Doe is an director'
      },
      {
        name: 'Jane Doe',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Jane Doe is an director'
      },
      {
        name: 'Jack Doe',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Jack Doe is an director'
      },
      {
        name: 'Megan Fox',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Megan Fox is an director'
      },
      {
        name: 'Johnny Depp',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Johnny Depp is an director'
      },
      {
        name: 'Leonardo DiCaprio',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Leonardo DiCaprio is an director'
      },
      {
        name: 'Scarlett Johansson',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Scarlett Johansson is an director'
      },
      {
        name: 'Chris Hemsworth',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Chris Hemsworth is an director'
      },
      {
        name: 'Robert Downey Jr.',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Robert Downey Jr. is an director'
      },
      {
        name: 'Mark Ruffalo',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Mark Ruffalo is an director'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('directors', null, {});
  }
};
