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
        id: 1,
        name: 'Christopher Nolan',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Christopher Nolan is an director'
      },
      {
        id: 2,
        name: 'Frank Darabont',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Frank Darabont is an director'
      },
      {
        id: 3,
        name: 'Quentin Tarantino',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Quentin Tarantino is an director'
      },
      {
        id: 4,
        name: 'Lana Wachowski',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Lana Wachowski is an director'
      },
      {
        id: 5,
        name: 'Lilly Wachowski',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Lilly Wachowski is an director'
      },
      {
        id: 6,
        name: 'Ridley Scott',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Ridley Scott is an director'
      },
      {
        id: 7,
        name: 'James Cameron',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'James Cameron is an director'
      },
      {
        id: 8,
        name: 'Francis Ford Coppola',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Francis Ford Coppola is an director'
      },
      {
        id: 9,
        name: 'Bong Joon-ho',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Bong Joon-ho is an director'
      },
      {
        id: 10,
        name: 'Mark Dindal',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Mark Dindal is an director'
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
