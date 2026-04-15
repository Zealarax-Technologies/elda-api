'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseTestimonials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Course, {
        foreignKey: "course_id",
        as: 'course'
      });
    }
  }
  CourseTestimonials.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    course_id: DataTypes.STRING,
    name: DataTypes.STRING,
    testimony: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CourseTestimonials',
  });
  return CourseTestimonials;
};