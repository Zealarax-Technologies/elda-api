const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllUser{

    async execute(page = 1)
    {
        const pageSize = 20;
        const users = await paginate(models.User, {
            page,
            pageSize
        });

        if(users)
        {
            return users;
        }

        return false;
    }
}

module.exports = new FetchAllUser();