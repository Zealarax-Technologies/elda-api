const models = require('../../models');

class CreatePartnerCategory{

    async execute(categoryData)
    {
        const category = await models.PartnerCategory.create(categoryData);
        if(category)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreatePartnerCategory();