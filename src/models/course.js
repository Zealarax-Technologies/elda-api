'use strict';
const slugify = require('slugify');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Course extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Programme, {
                foreignKey: "programme_id",
                as: 'programme'
            });
            this.hasMany(models.CourseTestimonials, {
                foreignKey: "course_id",
                as: 'course_testimonials'
            });
            this.belongsToMany(models.Staff, {
                through: models.CourseToStaff,
                foreignKey: "course_id",
                otherKey: "staff_id",
                as: 'staff'
            });
        }
    }
    Course.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: DataTypes.STRING,
        slug: DataTypes.STRING,
        description: DataTypes.TEXT,
        programme_id: DataTypes.STRING,
        image: DataTypes.STRING,
        course_code: DataTypes.STRING,
        number_of_ects: DataTypes.STRING,
        mandatory: DataTypes.BOOLEAN,
        date: DataTypes.JSON,
        duration: DataTypes.STRING,
        fee: DataTypes.JSON,
        learning_outcomes: DataTypes.JSON,
        how_to_apply: DataTypes.JSON,
        entry_requirements: DataTypes.JSON,
        assessment: DataTypes.JSON,
        modules: DataTypes.JSON,
        prospectus_link: DataTypes.STRING,
        language: DataTypes.STRING,
        status: DataTypes.STRING,
        target_audience: DataTypes.TEXT,
        course_chair_bio: DataTypes.TEXT,
        location: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Course',
        hooks: {
            beforeCreate(course) {
                if (course.title) {
                    course.slug = slugify(course.title, { lower: true, strict: true });
                }
            },
            beforeUpdate(course) {
                if (course.changed('title') && course.title) {
                    course.slug = slugify(course.title, { lower: true, strict: true });
                }
            },
        }
    });
    return Course;
};