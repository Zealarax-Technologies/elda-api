const models = require('../../models');

class DeletePosition{

    async execute(id)
    {
        const position = await models.Position.findByPk(id);
        if(position)
        {
            return await position.destroy();
        }

        return false;
    }
}

module.exports = new DeletePosition();