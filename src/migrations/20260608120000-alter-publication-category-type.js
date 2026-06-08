'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.changeColumn('PublicationCategories', 'type', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.changeColumn('PublicationCategories', 'type', {
      type: Sequelize.ENUM('category', 'type'),
      allowNull: true
    });
  }
};
