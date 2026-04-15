const models = require('../../models');

class DeletePartnerCategory{

    async execute(id)
    {
        const category = await models.PartnerCategory.findByPk(id);
        if(category)
        {
            return await category.destroy();
        }

        return false;
    }
}

module.exports = new DeletePartnerCategory();