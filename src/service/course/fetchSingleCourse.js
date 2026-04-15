const { Op } = require('sequelize');
const models = require('../../models');

class FetchSingleCourse{

    async execute(id)
    {
        const course = await models.Course.findOne({
            where: {
                [Op.or]: [
                    { uuid: id },
                    { slug: id }
                ]
            },
            include: [
                {
                    model: models.Programme,
                    as: 'programme'
                },
                {
                    model: models.Staff,
                    as: 'staff'
                },
                {
                    model: models.CourseTestimonials,
                    as: 'course_testimonials'
                },
            ]});
        if(course)
        {
            return course;
        }

        return false;
    }
}

module.exports = new FetchSingleCourse();