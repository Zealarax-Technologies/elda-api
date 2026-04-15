'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      title: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      programme_id: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      course_code: {
        type: Sequelize.STRING
      },
      number_of_ects: {
        type: Sequelize.STRING
      },
      mandatory: {
        type: Sequelize.BOOLEAN
      },
      date: {
        type: Sequelize.JSON
      },
      duration: {
        type: Sequelize.STRING
      },
      fee: {
        type: Sequelize.STRING
      },
      learning_outcomes: {
        type: Sequelize.TEXT
      },
      assessment: {
        type: Sequelize.TEXT
      },
      language: {
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
    await queryInterface.dropTable('Courses');
  }
};