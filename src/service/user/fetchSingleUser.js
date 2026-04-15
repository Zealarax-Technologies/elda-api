const models = require('../../models');

class FetchSingleUser{

    async execute(id)
    {
        const user = await models.User.findByPk(id);
        if(user)
        {
            return user;
        }

        return false;
    }
}

module.exports = new FetchSingleUser();