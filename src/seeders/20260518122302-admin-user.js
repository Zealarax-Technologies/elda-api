'use strict';
const models = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */

        const adminUser = await models.User.findOne({
            where: {
                email: "zealarax-test@gmail.com"
            }
        });

        if (!adminUser) {

            await models.User.create(
                {
                    name: 'Zealarax Technologies',
                    email: 'zealarax-test@gmail.com',
                    password: 'administrator',
                    isAdmin: true,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            );
        }
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        await models.User.destroy({
            where: {
                email: "zealarax-test@gmail.com"
            }
        })
    }
};
