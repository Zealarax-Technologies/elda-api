const models = require('../../models');

class DeletePublicationCategory{

    async execute(id)
    {
        const category = await models.PublicationCategory.findByPk(id);
        if(category)
        {
            return await category.destroy();
        }

        return false;
    }
}

module.exports = new DeletePublicationCategory();