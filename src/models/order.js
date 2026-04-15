'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Course, {
        foreignKey: 'course_id',
        as: 'course',
      });

    }
  }
  Order.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    checkout_id: DataTypes.STRING,
    course_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};