const models = require('../../models');

class UpdatePublicationCategory{

    async execute(id, categoryData)
    {
        const category = await models.PublicationCategory.findByPk(id);
        if(category)
        {
            return await category.update(categoryData);
        }

        return false;
    }
}

module.exports = new UpdatePublicationCategory();