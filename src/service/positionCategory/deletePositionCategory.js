const models = require('../../models');

class DeletePositionCategory{

    async execute(id)
    {
        const category = await models.PositionCategory.findByPk(id);
        if(category)
        {
            return await category.destroy();
        }

        return false;
    }
}

module.exports = new DeletePositionCategory();