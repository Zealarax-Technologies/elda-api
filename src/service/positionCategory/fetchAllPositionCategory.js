const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllPositionCategory{

    async execute(page = 1)
    {
        const pageSize = 20;
        const category = await paginate(models.PositionCategory, {
            page,
            pageSize
        });

        if(category)
        {
            return category;
        }

        return false;
    }
}

module.exports = new FetchAllPositionCategory();