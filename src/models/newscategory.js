'use strict';
const slugify = require('slugify');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NewsCategory.init({
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
    modelName: 'NewsCategory',
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
  return NewsCategory;
};