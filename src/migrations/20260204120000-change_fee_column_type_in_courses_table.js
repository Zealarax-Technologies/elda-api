'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Change the fee column from STRING to JSON to support array of fee objects
         * e.g., [{ type: 'online', cost: '600' }, { type: 'in person', cost: '1000' }]
         */
        await queryInterface.changeColumn('Courses', 'fee', {
            type: Sequelize.JSON,
            allowNull: true,
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Revert fee column back to STRING
         */
        await queryInterface.changeColumn('Courses', 'fee', {
            type: Sequelize.STRING,
            allowNull: true,
        });
    }
};
