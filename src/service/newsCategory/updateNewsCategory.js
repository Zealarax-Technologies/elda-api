const models = require('../../models');

class UpdateNewsCategory{

    async execute(id, categoryData)
    {
        const category = await models.NewsCategory.findByPk(id);
        if(category)
        {
            return await category.update(categoryData);
        }

        return false;
    }
}

module.exports = new UpdateNewsCategory();