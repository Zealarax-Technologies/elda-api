const models = require('../../models');

class CreateCollaboration{

    async execute(collaborationData)
    {
        const collaboration = await models.Collaboration.create(collaborationData);
        if(collaboration)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateCollaboration();