const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdateProgramme{

    async execute(id, programmeData)
    {
        const programme = await models.Programme.findByPk(id);
        if(programme)
        {
            if(programmeData.image && programme.image)
            {
                imageRemover(programme.image);
            }
            return await programme.update(programmeData);
        }

        return false;
    }
}

module.exports = new UpdateProgramme();