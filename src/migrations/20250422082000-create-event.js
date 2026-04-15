'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      title: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      location: {
        type: Sequelize.STRING
      },
      event_type_id: {
        type: Sequelize.STRING
      },
      topic: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Events');
  }
};