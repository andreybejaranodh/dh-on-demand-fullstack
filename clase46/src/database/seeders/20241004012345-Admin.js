'use strict';
const bcrypt = require('bcryptjs');

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
   const roleAdmin = await queryInterface.sequelize.query('select * from roles where name = "admin"');
     
   await queryInterface.bulkInsert('users', [
      {
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        name: 'Administrador',
        roles_id: roleAdmin[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
