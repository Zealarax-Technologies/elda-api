'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        // Reference column already exists in database, skip adding it

        // Change total_amount from STRING to DECIMAL
        await queryInterface.changeColumn('Checkouts', 'total_amount', {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: true,
        });
    },

    async down(queryInterface, Sequelize) {
        // Revert total_amount back to STRING
        await queryInterface.changeColumn('Checkouts', 'total_amount', {
            type: Sequelize.STRING,
            allowNull: true,
        });
    }
};
