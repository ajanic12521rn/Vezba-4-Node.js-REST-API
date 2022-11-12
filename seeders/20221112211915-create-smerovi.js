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

    await queryInterface.bulkInsert('smers', 
      [
        {id:"211",naziv:"Рачунарске науке ОС"},
        {id:"212",naziv:"Рачунарске мреже и комуникације"},
        {id:"213",naziv:"Рачунарске науке МС"},
        {id:"214",naziv:"Рачунарске науке ДС"},
        {id:"215",naziv:"Рачунарске мреже и комуникације ОС"},
        {id:"216",naziv:"Рачунарске мреже и комуникације МС"},
        {id:"218",naziv:"Информационе технологије МС"},
        {id:"520",naziv:"Рачунарско инжењерство ОС"},
        {id:"821",naziv:"Софтверско инжењерство МС"},
        {id:"822",naziv:"Информациони системи МС"},
        {id:"823",naziv:"Рачунарски дизајн ОС"},
        {id:"824",naziv:"Рачунарски дизајн МС"},
        {id:"825",naziv:"Рачунарско инжењерство ДС"},
        {id:"826",naziv:"Рачунарски дизајн ДС"}
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Smer', null, {});
  }
};
