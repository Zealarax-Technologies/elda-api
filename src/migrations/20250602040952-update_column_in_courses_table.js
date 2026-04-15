'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.changeColumn('Courses', 'learning_outcomes', {
        type: Sequelize.JSON,
        allowNull: true,
    });
    await queryInterface.changeColumn('Courses', 'assessment', {
        type: Sequelize.JSON,
        allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.changeColumn('Courses', 'learning_outcomes', {
        type: Sequelize.TEXT,
        allowNull: true,
    });
    await queryInterface.changeColumn('Courses', 'assessment', {
        type: Sequelize.TEXT,
        allowNull: true,
    });
  }
};
