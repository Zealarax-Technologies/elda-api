const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdateCollaboration{

    async execute(id, collaborationData)
    {
        const collaboration = await models.Collaboration.findByPk(id);
        if(collaboration)
        {
            return await collaboration.update(collaborationData);
        }

        return false;
    }
}

module.exports = new UpdateCollaboration();