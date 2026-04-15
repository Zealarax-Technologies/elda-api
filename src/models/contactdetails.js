'use strict';
const slugify = require('slugify');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContactDetails.init({
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
  }, {
    sequelize,
    modelName: 'ContactDetails',
    hooks: {
      beforeCreate(contact) {
        if (contact.title) {
          contact.keyword = slugify(contact.title, { lower: true, strict: true });
        }
      },
    },
  });
  return ContactDetails;
};