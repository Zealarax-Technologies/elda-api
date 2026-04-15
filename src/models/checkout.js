'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Checkout extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Order, {
                foreignKey: 'checkout_id',
                as: 'order',
            });
        }
    }
    Checkout.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        reference: {
            type: DataTypes.STRING,
            defaultValue: 'REF202602RTI0000',
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        postal_code: DataTypes.STRING,
        country: DataTypes.STRING,
        orders: DataTypes.JSON,
        total_amount: DataTypes.DECIMAL(10, 2),
    }, {
        sequelize,
        modelName: 'Checkout',
    });
    return Checkout;
};