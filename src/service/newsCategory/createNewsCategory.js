const models = require('../../models');

class CreateNewsCategory{

    async execute(categoryData)
    {
        const category = await models.NewsCategory.create(categoryData);
        if(category)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateNewsCategory();