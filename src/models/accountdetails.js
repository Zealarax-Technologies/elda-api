'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccountDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AccountDetails.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    account_name: DataTypes.STRING,
    account_number: DataTypes.STRING,
    bank_name: DataTypes.STRING,
    default: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'AccountDetails',
  });
  return AccountDetails;
};