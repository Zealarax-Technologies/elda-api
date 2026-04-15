'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OurPartner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.PartnerCategory, {
        foreignKey: "category_id",
        as: 'category'
      })
    }
  }
  OurPartner.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    category_id: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OurPartner',
  });
  return OurPartner;
};