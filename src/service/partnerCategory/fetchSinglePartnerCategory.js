const models = require('../../models');

class FetchSinglePartnerCategory{

    async execute(id)
    {
        const category = await models.PartnerCategory.findByPk(id);
        if(category)
        {
            return category;
        }

        return false;
    }
}

module.exports = new FetchSinglePartnerCategory();