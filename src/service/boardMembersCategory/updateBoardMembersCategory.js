const models = require('../../models');

class UpdateBoardMembersCategory{

    async execute(id, categoryData)
    {
        const category = await models.BoardMembersCategory.findByPk(id);
        if(category)
        {
            return await category.update(categoryData);
        }

        return false;
    }
}

module.exports = new UpdateBoardMembersCategory();