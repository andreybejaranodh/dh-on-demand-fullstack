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
        avatar: 'christopherNolan.jpg',
        bio: 'Christopher Nolan is an director'
      },
      {
        id: 2,
        name: 'Frank Darabont',
        avatar: 'frankDarabont.jpg',
        bio: 'Frank Darabont is an director'
      },
      {
        id: 3,
        name: 'Quentin Tarantino',
        avatar: 'quentinTarantino.jpg',
        bio: 'Quentin Tarantino is an director'
      },
      {
        id: 4,
        name: 'Lana Wachowski',
        avatar: 'lanaWachowski.jpg',
        bio: 'Lana Wachowski is an director'
      },
      {
        id: 5,
        name: 'Lilly Wachowski',
        avatar: 'lillyWachowski.jpg',
        bio: 'Lilly Wachowski is an director'
      },
      {
        id: 6,
        name: 'Ridley Scott',
        avatar: 'ridleyScott.jpg',
        bio: 'Ridley Scott is an director'
      },
      {
        id: 7,
        name: 'James Cameron',
        avatar: 'jamesCameron.jpg',
        bio: 'James Cameron is an director'
      },
      {
        id: 8,
        name: 'Francis Ford Coppola',
        avatar: 'francisFordCoppola.jpg',
        bio: 'Francis Ford Coppola is an director'
      },
      {
        id: 9,
        name: 'Bong Joon-ho',
        avatar: 'bongJoon-ho.jpg',
        bio: 'Bong Joon-ho is an director'
      },
      {
        id: 10,
        name: 'Mark Dindal',
        avatar: 'markDindal.jpg',
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
    await queryInterface.bulkDelete('directors', null, {truncate: true, cascade: true});
  }
};
