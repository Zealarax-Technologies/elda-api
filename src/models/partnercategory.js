'use strict';
const {
  Model
} = require('sequelize');
const { default: slugify } = require('slugify');
module.exports = (sequelize, DataTypes) => {
  class PartnerCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PartnerCategory.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'PartnerCategory',
    hooks: {
      beforeCreate(category) {
        if (category.name) {
          category.slug = slugify(category.name, { lower: true, strict: true });
        }
      },
      beforeUpdate(category) {
        if (category.changed('name') && category.name) {
          category.slug = slugify(category.name, { lower: true, strict: true });
        }
      },
    },
  });
  return PartnerCategory;
};