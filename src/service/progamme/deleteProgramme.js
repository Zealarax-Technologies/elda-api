const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeleteProgramme{

    async execute(id)
    {
        const programme = await models.Programme.findByPk(id);
        if(programme)
        {
            if(programme.image)
            {
                imageRemover(programme.image);
            }
            return await programme.destroy();
        }

        return false;
    }
}

module.exports = new DeleteProgramme();