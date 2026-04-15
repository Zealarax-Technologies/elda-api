const models = require('../../models');

class FetchSingleCollaboration{

    async execute(id)
    {
        const collaboration = await models.Collaboration.findByPk(id);
        if(collaboration)
        {
            return collaboration;
        }

        return false;
    }
}

module.exports = new FetchSingleCollaboration();