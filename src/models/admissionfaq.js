'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdmissionFAQ extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdmissionFAQ.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'AdmissionFAQ',
  });
  return AdmissionFAQ;
};