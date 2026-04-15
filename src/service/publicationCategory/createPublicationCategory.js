const models = require('../../models');

class CreatePublicationCategory{

    async execute(categoryData)
    {
        const category = await models.PublicationCategory.create(categoryData);
        if(category)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreatePublicationCategory();