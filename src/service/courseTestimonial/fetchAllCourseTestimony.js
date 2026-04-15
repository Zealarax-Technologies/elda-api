const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllCourseTestimony{

    async execute(page = 1)
    {
        const pageSize = 20;
        const testimony = await paginate(models.CourseTestimonials, {
            page,
            pageSize,
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

module.exports = new FetchAllCourseTestimony();