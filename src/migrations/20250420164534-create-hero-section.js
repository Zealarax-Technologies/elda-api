'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HeroSections', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      title: {
        type: Sequelize.TEXT
      },
      caption: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      cta1_title: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cta1_link: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cta2_title: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cta2_link: {
        type: Sequelize.STRING,
        allowNull: true
      },
      image: {
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
    await queryInterface.dropTable('HeroSections');
  }
};