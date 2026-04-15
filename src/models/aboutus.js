'use strict';
const slugify = require('slugify');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AboutUs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AboutUs.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    order_no: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    keyword: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'AboutUs',
    hooks: {
      beforeCreate(about) {
        if (about.title) {
          about.keyword = slugify(about.title, { lower: true, strict: true });
        }
      },
    },
  });
  return AboutUs;
};