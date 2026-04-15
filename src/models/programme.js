'use strict';
const slugify = require('slugify');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Programme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Programme.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Programme',
    hooks: {
      beforeCreate(programme) {
        if (programme.name) {
          programme.slug = slugify(programme.name, { lower: true, strict: true });
        }
      },
      beforeUpdate(programme) {
        if (programme.changed('name') && programme.name) {
          programme.slug = slugify(programme.name, { lower: true, strict: true });
        }
      },
    },
  });
  return Programme;
};