const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdateCourse{

    async execute(id, courseData)
    {
        const course = await models.Course.findByPk(id);
        if(course)
        {
            if(courseData?.staff?.length > 0 )
            {
                await Promise.all(courseData.staff.map(async (id) => {
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
            if(courseData?.image && course.image)
            {
                imageRemover(course.image);
            }
            return await course.update(courseData);
        }

        return false;
    }
}

module.exports = new UpdateCourse();