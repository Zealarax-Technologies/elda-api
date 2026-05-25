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
    await queryInterface.removeColumn('Testimonies', 'testimony');
    await queryInterface.addColumn('Testimonies', 'quote', {
        type: Sequelize.TEXT,
    });
    await queryInterface.addColumn('Testimonies', 'role', {
        type: Sequelize.TEXT,
        allowNull: true,
    });
    await queryInterface.addColumn('Testimonies', 'company', {
        type: Sequelize.TEXT,
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
    await queryInterface.addColumn('Testimonies', 'testimony', {
        type: Sequelize.TEXT
    });
    await queryInterface.removeColumn('Testimonies', 'quote');
    await queryInterface.removeColumn('Testimonies', 'role');
    await queryInterface.removeColumn('Testimonies', 'company');
  }
};
