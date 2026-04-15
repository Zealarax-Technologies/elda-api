'use strict';
const slugify = require('slugify');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.NewsCategory, {
        foreignKey: "category_id",
        as: 'category'
      })
    }
  }
  News.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    content: DataTypes.TEXT,
    category_id: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'News',
    hooks: {
      beforeCreate(news) {
        if (news.title) {
          news.slug = slugify(news.title, { lower: true, strict: true });
        }
      },
      beforeUpdate(news) {
        if (news.changed('title') && news.title) {
          news.slug = slugify(news.title, { lower: true, strict: true });
        }
      },
    },
  });
  return News;
};