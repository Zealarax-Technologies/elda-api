'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BoardMembers', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      category_id: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      social_links: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BoardMembers');
  }
};