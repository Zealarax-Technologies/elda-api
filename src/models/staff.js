'use strict';
const slugify = require('slugify');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Course, {
        through: models.CourseToStaff,
        foreignKey: "staff_id",
        otherKey: "course_id", 
        as: 'course'
      });
    }
  }
  Staff.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    position: DataTypes.STRING,
    field: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Staff',
    hooks: {
      beforeCreate(staff) {
        if (staff.name) {
          staff.slug = slugify(staff.name, { lower: true, strict: true });
        }
      },
      beforeUpdate(staff) {
        if (staff.changed('name') && staff.name) {
          staff.slug = slugify(staff.name, { lower: true, strict: true });
        }
      },
    }
  });
  return Staff;
};