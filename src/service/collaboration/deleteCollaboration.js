const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeleteCollaboration{

    async execute(id)
    {
        const collaboration = await models.Collaboration.findByPk(id);
        if(collaboration)
        {
            return await collaboration.destroy();
        }

        return false;
    }
}

module.exports = new DeleteCollaboration();