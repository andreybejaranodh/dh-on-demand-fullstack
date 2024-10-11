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
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Leonardo DiCaprio is an actor'
      },
      {
        id: 2,
        name: 'Joseph Gordon-Levitt',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Joseph Gordon-Levitt is an actor'
      },
      {
        id: 3,
        name: 'Elliot Page',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Elliot Page is an actor'
      },
      {
        id: 4,
        name: 'Tim Robbins',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Tim Robbins is an actor'
      },
      {
        id: 5,
        name: 'Morgan Freeman',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Morgan Freeman is an actor'
      },
      {
        id: 6,
        name: 'Bob Gunton',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Bob Gunton is an actor'
      },
      {
        id: 7,
        name: 'Christian Bale',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Christian Bale is an actor'
      },
      {
        id: 8,
        name: 'Heath Ledger',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Heath Ledger is an actor'
      },
      {
        id: 9,
        name: 'Aaron Eckhart',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Aaron Eckhart is an actor'
      },
      {
        id: 10,
        name: 'John Travolta',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'John Travolta is an actor'
      },
      {
        id: 11,
        name: 'Uma Thurman',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Uma Thurman is an actor'
      },
      {
        id: 12,
        name: 'Samuel L. Jackson',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Samuel L. Jackson is an actor'
      },
      {
        id: 13,
        name: 'Keanu Reeves',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Keanu Reeves is an actor'
      },
      {
        id: 14,
        name: 'Laurence Fishburne',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Laurence Fishburne is an actor'
      },
      {
        id: 15,
        name: 'Carrie-Anne Moss',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Carrie-Anne Moss is an actor'
      },
      {
        id: 16,
        name: 'Russell Crowe',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Russell Crowe is an actor'
      },
      {
        id: 17,
        name: 'Joaquin Phoenix',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Joaquin Phoenix is an actor'
      },
      {
        id: 18,
        name: 'Connie Nielsen',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Connie Nielsen is an actor'
      },
      {
        id: 19,
        name: 'Leonardo DiCaprio',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Leonardo DiCaprio is an actor'
      },
      {
        id: 20,
        name: 'Kate Winslet',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Kate Winslet is an actor'
      },
      {
        id: 21,
        name: 'Billy Zane',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Billy Zane is an actor'
      },
      {
        id: 22,
        name: 'Marlon Brando',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Marlon Brando is an actor'
      },
      {
        id: 23,
        name: 'Al Pacino',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Al Pacino is an actor'
      },
      {
        id: 24,
        name: 'James Caan',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'James Caan is an actor'
      },
      {
        id: 25,
        name: 'Song Kang-ho',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Song Kang-ho is an actor'
      },
      {
        id: 26,
        name: 'Lee Sun-kyun',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Lee Sun-kyun is an actor'
      },
      {
        id: 27,
        name: 'Cho Yeo-jeong',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Cho Yeo-jeong is an actor'
      },
      {
        id: 28,
        name: 'Matthew McConaughey',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Matthew McConaughey is an actor'
      },
      {
        id: 29,
        name: 'Anne Hathaway',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Anne Hathaway is an actor'
      },
      {
        id: 30,
        name: 'Jessica Chastain',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Jessica Chastain is an actor'
      },
      {
        id: 31,
        name: 'Chris Pratt',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Chris Pratt is an actor'
      },
      {
        id: 32,
        name: 'Samuel L. Jackson',
        avatar: 'https://www.lorempixel.com/200/200/people/',
        bio: 'Samuel L. Jackson is an actor'
      },
      {
        id: 33,
        name: 'Hannah Waddington',
        avatar: 'https://www.lorempixel.com/200/200/people/',
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
    await queryInterface.bulkDelete('actors', null, {});
  }
};
