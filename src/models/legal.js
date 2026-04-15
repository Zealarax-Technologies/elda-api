'use strict';
const {
  Model
} = require('sequelize');
const { default: slugify } = require('slugify');
module.exports = (sequelize, DataTypes) => {
  class Legal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Legal.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    keyword: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Legal',
    hooks: {
      beforeCreate(legal) {
        if (legal.title) {
          legal.keyword = slugify(legal.title, { lower: true, strict: true });
        }
      },
    },
  });
  return Legal;
};