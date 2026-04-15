'use strict';
const {
  Model
} = require('sequelize');
const { default: slugify } = require('slugify');
module.exports = (sequelize, DataTypes) => {
  class Announcement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Announcement.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Announcement',
    hooks: {
      beforeCreate(announcement) {
        if (announcement.title) {
          announcement.slug = slugify(announcement.title, { lower: true, strict: true });
        }
      },
      beforeUpdate(announcement) {
        if (announcement.changed('title') && announcement.title) {
          announcement.slug = slugify(announcement.title, { lower: true, strict: true });
        }
      },
    },
  });
  return Announcement;
};