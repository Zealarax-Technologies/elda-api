'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.addColumn('Courses', 'status', {
        type: Sequelize.ENUM('upcoming', 'latest', 'popular'),
        defaultValue: 'upcoming',
        allowNull: true,
    });


    await queryInterface.addColumn('Courses', 'target_audience', {
        type: Sequelize.TEXT,
        allowNull: true,
    });

    await queryInterface.addColumn('Courses', 'course_chair_bio', {
        type: Sequelize.TEXT,
        allowNull: true,
    });

    await queryInterface.addColumn('Courses', 'location', {
        type: Sequelize.STRING,
        allowNull: true,
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Courses', 'status');
    await queryInterface.removeColumn('Courses', 'target_audience');
    await queryInterface.removeColumn('Courses', 'course_chair_bio');
    await queryInterface.removeColumn('Courses', 'location');
  }
};
