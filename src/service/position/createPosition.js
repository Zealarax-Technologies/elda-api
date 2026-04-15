const models = require('../../models');

class CreatePosition{

    async execute(positionData)
    {
        const position = await models.Position.create(positionData);
        if(position)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreatePosition();