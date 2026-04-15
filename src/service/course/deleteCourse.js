const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeleteCourse{

    async execute(id)
    {
        const course = await models.Course.findByPk(id);
        if(course)
        {
            if(course.image)
            {
                imageRemover(course.image);
            }
            return await course.destroy();
        }

        return false;
    }
}

module.exports = new DeleteCourse();