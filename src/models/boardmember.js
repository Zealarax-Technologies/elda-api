'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BoardMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.BoardMembersCategory, {
        foreignKey: "category_id",
        as: 'category'
      })
    }
  }
  BoardMember.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    about: DataTypes.TEXT,
    social_links: DataTypes.JSON,
    image: DataTypes.STRING,
    category_id: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BoardMember',
  });
  return BoardMember;
};