'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HeroSection.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.TEXT,
    caption: DataTypes.TEXT,
    cta1_title: DataTypes.STRING,
    cta1_link: DataTypes.STRING,
    cta2_title: DataTypes.STRING,
    cta2_link: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HeroSection',
  });
  return HeroSection;
};