const models = require('../../models');

class UpdatePositionCategory{

    async execute(id, categoryData)
    {
        const category = await models.PositionCategory.findByPk(id);
        if(category)
        {
            return await category.update(categoryData);
        }

        return false;
    }
}

module.exports = new UpdatePositionCategory();