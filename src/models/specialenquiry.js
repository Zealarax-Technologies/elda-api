'use strict';
const slugify = require('slugify');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpecialEnquiry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SpecialEnquiry.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    keyword: DataTypes.STRING,
    content: DataTypes.TEXT,
    order_no: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SpecialEnquiry',
    hooks: {
      beforeCreate(enquiry) {
        if (enquiry.title) {
          enquiry.keyword = slugify(enquiry.title, { lower: true, strict: true });
        }
      },
    },
  });
  return SpecialEnquiry;
};