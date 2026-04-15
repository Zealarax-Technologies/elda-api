const models = require('../../models');

class FetchSinglePublicationCategory{

    async execute(id)
    {
        const category = await models.PublicationCategory.findByPk(id);
        if(category)
        {
            return category;
        }

        return false;
    }
}

module.exports = new FetchSinglePublicationCategory();