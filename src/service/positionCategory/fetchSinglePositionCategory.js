const models = require('../../models');

class FetchSinglePositionCategory{

    async execute(id)
    {
        const category = await models.PositionCategory.findByPk(id);
        if(category)
        {
            return category;
        }

        return false;
    }
}

module.exports = new FetchSinglePositionCategory();