const models = require('../../models');

class UpdatePosition{

    async execute(id, positionData)
    {
        const position = await models.Position.findByPk(id);
        if(position)
        {
            return await position.update(positionData);
        }

        return false;
    }
}

module.exports = new UpdatePosition();