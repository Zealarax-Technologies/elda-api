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
    await queryInterface.addColumn('Courses', 'how_to_apply', {
        type: Sequelize.JSON,
        allowNull: true,
    });

    await queryInterface.addColumn('Courses', 'entry_requirements', {
        type: Sequelize.JSON,
        allowNull: true,
    });
    
    await queryInterface.addColumn('Courses', 'modules', {
        type: Sequelize.JSON,
        allowNull: true,
    });
    
    await queryInterface.addColumn('Courses', 'prospectus_link', {
        type: Sequelize.STRING,
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

    await queryInterface.removeColumn('Courses', 'how_to_apply');
    await queryInterface.removeColumn('Courses', 'entry_requirements');
    await queryInterface.removeColumn('Courses', 'modules');
    await queryInterface.removeColumn('Courses', 'prospectus_link');
  }
};
