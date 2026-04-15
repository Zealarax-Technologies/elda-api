const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdateCourseTestimony{

    async execute(id, testimonyData)
    {
        const testimony = await models.CourseTestimonials.findByPk(id);
        if(testimony)
        {
            if(testimonyData?.image && testimony.image)
            {
                imageRemover(testimony.image);
            }
            return await testimony.update(testimonyData);
        }

        return false;
    }
}

module.exports = new UpdateCourseTestimony();