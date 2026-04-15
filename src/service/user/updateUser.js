const models = require('../../models');

class UpdateUser{

    async execute(id, userData)
    {
        const user = await models.User.findByPk(id);
        if(user)
        {
            return await user.update(userData);
        }

        return false;
    }
}

module.exports = new UpdateUser();