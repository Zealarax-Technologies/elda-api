const models = require('../../models');

class FetchSingleNewsCategory{

    async execute(id)
    {
        const category = await models.NewsCategory.findByPk(id);
        if(category)
        {
            return category;
        }

        return false;
    }
}

module.exports = new FetchSingleNewsCategory();