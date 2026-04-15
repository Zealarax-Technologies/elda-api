const models = require('../../models');

class CreateUser{

    async execute(userData)
    {
        const user = await models.User.create(userData);
        if(user){
            return true;
        }

        return false;
    }
}

module.exports = new CreateUser();