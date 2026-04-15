const models = require('../../models');

class DeleteBoardMembersCategory{

    async execute(id)
    {
        const category = await models.BoardMembersCategory.findByPk(id);
        if(category)
        {
            return await category.destroy();
        }

        return false;
    }
}

module.exports = new DeleteBoardMembersCategory();