const models = require('../../models');

class UpdatePartnerCategory{

    async execute(id, categoryData)
    {
        const category = await models.PartnerCategory.findByPk(id);
        if(category)
        {
            return await category.update(categoryData);
        }

        return false;
    }
}

module.exports = new UpdatePartnerCategory();