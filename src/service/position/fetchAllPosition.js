const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllPosition{

    async execute(page = 1)
    {
        const pageSize = 20;
        const position = await paginate(models.Position, {
            page,
            pageSize,
            include: [
                {
                    model: models.PositionCategory,
                    as: 'category'
                }
            ]
        });


        if(position)
        {
            return position;
        }

        return false;
    }
}

module.exports = new FetchAllPosition();