const models = require('../../models');

class FetchSingleCourseTestimony{

    async execute(id)
    {
        const testimony = await models.CourseTestimonials.findByPk(id, {
            include: [
                {
                    model: models.Course,
                    as: 'course'
                },
            ]
        });
        if(testimony)
        {
            return testimony;
        }

        return false;
    }
}

module.exports = new FetchSingleCourseTestimony();