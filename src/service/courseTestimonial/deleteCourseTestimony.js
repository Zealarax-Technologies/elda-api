const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeleteCourseTestimony{

    async execute(id)
    {
        const testimony = await models.CourseTestimonials.findByPk(id);
        if(testimony)
        {
            if(testimony.image)
            {
                imageRemover(testimony.image);
            }
            return await testimony.destroy();
        }

        return false;
    }
}

module.exports = new DeleteCourseTestimony();