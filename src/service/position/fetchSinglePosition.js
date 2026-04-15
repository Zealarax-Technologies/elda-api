const models = require('../../models');

class FetchSinglePosition{

    async execute(id)
    {
        const position = await models.Position.findByPk(id, {include: [
            {
                model: models.PositionCategory,
                as: 'category'
            }
        ]});
        if(position)
        {
            return position;
        }

        return false;
    }
}

module.exports = new FetchSinglePosition();