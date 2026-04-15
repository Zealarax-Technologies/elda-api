const models = require('../../models');

class CreateProgramme{

    async execute(programmeData)
    {
        const programme = await models.Programme.create(programmeData);
        if(programme)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateProgramme();