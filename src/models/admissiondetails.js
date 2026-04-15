'use strict';
const slugify = require('slugify');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdmissionDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdmissionDetails.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    keyword: DataTypes.STRING,
    order_no: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'AdmissionDetails',
    hooks: {
      beforeCreate(details) {
        if (details.title) {
          details.keyword = slugify(details.title, { lower: true, strict: true });
        }
      },
    },
  });
  return AdmissionDetails;
};