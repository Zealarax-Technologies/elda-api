const models = require('../../models');

class DeleteNewsCategory{

    async execute(id)
    {
        const category = await models.NewsCategory.findByPk(id);
        if(category)
        {
            return await category.destroy();
        }

        return false;
    }
}

module.exports = new DeleteNewsCategory();