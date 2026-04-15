'use strict';
const slugify = require('slugify');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.PublicationCategory, {
        foreignKey: "category_id",
        as: 'category'
      })
    }
  }
  Publication.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    file: DataTypes.STRING,
    category_id: DataTypes.STRING
  }, {
    sequelize,
    modeltitle: 'Publication',
    hooks: {
      beforeCreate(publication) {
        if (publication.title) {
          publication.slug = slugify(publication.title, { lower: true, strict: true });
        }
      },
      beforeUpdate(publication) {
        if (publication.changed('title') && publication.title) {
          publication.slug = slugify(publication.title, { lower: true, strict: true });
        }
      },
    },
  });
  return Publication;
};