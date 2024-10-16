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
        id: 1,
        name: 'Leonardo DiCaprio',
        avatar: 'leonardoDiCaprio.jpg',
        bio: 'Leonardo DiCaprio is an actor'
      },
      {
        id: 2,
        name: 'Joseph Gordon-Levitt',
        avatar: 'josephGordon-Levitt.jpg',
        bio: 'Joseph Gordon-Levitt is an actor'
      },
      {
        id: 3,
        name: 'Elliot Page',
        avatar: 'elliotPage.jpg',
        bio: 'Elliot Page is an actor'
      },
      {
        id: 4,
        name: 'Tim Robbins',
        avatar: 'timRobbins.jpg',
        bio: 'Tim Robbins is an actor'
      },
      {
        id: 5,
        name: 'Morgan Freeman',
        avatar: 'morganFreeman.jpg',
        bio: 'Morgan Freeman is an actor'
      },
      {
        id: 6,
        name: 'Bob Gunton',
        avatar: 'bobGunton.jpg',
        bio: 'Bob Gunton is an actor'
      },
      {
        id: 7,
        name: 'Christian Bale',
        avatar: 'christianBale.jpg',
        bio: 'Christian Bale is an actor'
      },
      {
        id: 8,
        name: 'Heath Ledger',
        avatar: 'heathLedger.jpg',
        bio: 'Heath Ledger is an actor'
      },
      {
        id: 9,
        name: 'Aaron Eckhart',
        avatar: 'aaronEckhart.jpg',
        bio: 'Aaron Eckhart is an actor'
      },
      {
        id: 10,
        name: 'John Travolta',
        avatar: 'johnTravolta.jpg',
        bio: 'John Travolta is an actor'
      },
      {
        id: 11,
        name: 'Uma Thurman',
        avatar: 'umaThurman.jpg',
        bio: 'Uma Thurman is an actor'
      },
      {
        id: 12,
        name: 'Samuel L. Jackson',
        avatar: 'samuelLJackson.jpg',
        bio: 'Samuel L. Jackson is an actor'
      },
      {
        id: 13,
        name: 'Keanu Reeves',
        avatar: 'keanuReeves.jpg',
        bio: 'Keanu Reeves is an actor'
      },
      {
        id: 14,
        name: 'Laurence Fishburne',
        avatar: 'laurenceFishburne.jpg',
        bio: 'Laurence Fishburne is an actor'
      },
      {
        id: 15,
        name: 'Carrie-Anne Moss',
        avatar: 'carrie-AnneMoss.jpg',
        bio: 'Carrie-Anne Moss is an actor'
      },
      {
        id: 16,
        name: 'Russell Crowe',
        avatar: 'russellCrowe.jpg',
        bio: 'Russell Crowe is an actor'
      },
      {
        id: 17,
        name: 'Joaquin Phoenix',
        avatar: 'joaquinPhoenix.jpg',
        bio: 'Joaquin Phoenix is an actor'
      },
      {
        id: 18,
        name: 'Connie Nielsen',
        avatar: 'connieNielsen.jpg',
        bio: 'Connie Nielsen is an actor'
      },
      {
        id: 19,
        name: 'Kate Winslet',
        avatar: 'kateWinslet.jpg',
        bio: 'Kate Winslet is an actor'
      },
      {
        id: 20,
        name: 'Billy Zane',
        avatar: 'billyZane.jpg',
        bio: 'Billy Zane is an actor'
      },
      {
        id: 21,
        name: 'Marlon Brando',
        avatar: 'marlonBrando.jpg',
        bio: 'Marlon Brando is an actor'
      },
      {
        id: 22,
        name: 'Al Pacino',
        avatar: 'alPacino.jpg',
        bio: 'Al Pacino is an actor'
      },
      {
        id: 23,
        name: 'James Caan',
        avatar: 'jamesCaan.jpg',
        bio: 'James Caan is an actor'
      },
      {
        id: 24,
        name: 'Song Kang-ho',
        avatar: 'songKang-ho.jpg',
        bio: 'Song Kang-ho is an actor'
      },
      {
        id: 25,
        name: 'Lee Sun-kyun',
        avatar: 'leeSun-kyun.jpg',
        bio: 'Lee Sun-kyun is an actor'
      },
      {
        id: 26,
        name: 'Cho Yeo-jeong',
        avatar: 'choYeo-jeong.jpg',
        bio: 'Cho Yeo-jeong is an actor'
      },
      {
        id: 27,
        name: 'Matthew McConaughey',
        avatar: 'matthewMcConaughey.jpg',
        bio: 'Matthew McConaughey is an actor'
      },
      {
        id: 28,
        name: 'Anne Hathaway',
        avatar: 'anneHathaway.jpg',
        bio: 'Anne Hathaway is an actor'
      },
      {
        id: 29,
        name: 'Jessica Chastain',
        avatar: 'jessicaChastain.jpg',
        bio: 'Jessica Chastain is an actor'
      },
      {
        id: 30,
        name: 'Chris Pratt',
        avatar: 'chrisPratt.jpg',
        bio: 'Chris Pratt is an actor'
      },
      {
        id: 31,
        name: 'Hannah Waddington',
        avatar: 'hannahWaddington.jpg',
        bio: 'Hannah Waddington is an actor'
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
    await queryInterface.bulkDelete('actors', null, {truncate: true, cascade: true});
  }
};
