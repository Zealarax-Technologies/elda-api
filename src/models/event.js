'use strict';
const slugify = require('slugify');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.EventType, {
        foreignKey: "event_type_id",
        as: 'event_type'
      })
    }
  }
  Event.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    event_type_id: DataTypes.STRING,
    topic: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
    hooks: {
      beforeCreate(event) {
        if (event.title) {
          event.slug = slugify(event.title, { lower: true, strict: true });
        }
      },
      beforeUpdate(event) {
        if (event.changed('title') && event.title) {
          event.slug = slugify(event.title, { lower: true, strict: true });
        }
      },
    },
  });
  return Event;
};