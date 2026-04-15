const models = require('../../models');

class DeleteUser{

    async execute(id)
    {
        const user = await models.User.findByPk(id);
        if(user)
        {
            return await user.destroy();
        }

        return false;
    }
}

module.exports = new DeleteUser();