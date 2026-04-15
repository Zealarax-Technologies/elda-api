const models = require('../../models');

class CreateCourseTestimony{

    async execute(testimonyData)
    {
        const testimony = await models.CourseTestimonials.create(testimonyData);
        if(testimony)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateCourseTestimony();