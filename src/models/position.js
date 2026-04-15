'use strict';
const slugify = require('slugify');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.PositionCategory, {
        foreignKey: "position_category_id",
        as: 'category'
      })
    }
  }
  Position.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT,
    requirements: DataTypes.TEXT,
    location: DataTypes.TEXT,
    job_type: DataTypes.STRING,
    position_category_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Position',
    hooks: {
      beforeCreate(position) {
        if (position.title) {
          position.slug = slugify(position.title, { lower: true, strict: true });
        }
      },
      beforeUpdate(position) {
        if (position.changed('title') && position.title) {
          position.slug = slugify(position.title, { lower: true, strict: true });
        }
      },
    },
  });
  return Position;
};