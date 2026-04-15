const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllCollaboration{

    async execute(page = 1)
    {
        const pageSize = 20;
        const collaboration = await paginate(models.Collaboration, {
            page,
            pageSize
        });

        if(collaboration)
        {
            return collaboration;
        }

        return false;
    }
}

module.exports = new FetchAllCollaboration();