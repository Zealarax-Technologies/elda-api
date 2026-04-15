const models = require('../../models');

class CreateCourse{

    async execute(courseData)
    {
        const course = await models.Course.create(courseData);
        if(course)
        {
            if(courseData?.staff?.length > 0 )
            {
                await Promise.all(courseData.staff?.map(async (id) => {
                    await models.CourseToStaff.findOrCreate({
                        where: {
                            staff_id: id,
                            course_id: course.uuid,
                        },
                        defaults: {
                            staff_id: id,
                            course_id: course.uuid,
                        },
                    });
                }));
            }
            return true;
        }

        return false;
    }
}

module.exports = new CreateCourse();