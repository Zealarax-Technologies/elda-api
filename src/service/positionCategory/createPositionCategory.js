const models = require('../../models');

class DeletePositionCategory{

    async execute(categoryData)
    {
        const category = await models.PositionCategory.create(categoryData);
        if(category)
        {
            return true;
        }

        return false;
    }
}

module.exports = new DeletePositionCategory();