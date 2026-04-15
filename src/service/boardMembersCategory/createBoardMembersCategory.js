const models = require('../../models');

class CreateBoardMembersCategory{

    async execute(categoryData)
    {
        const category = await models.BoardMembersCategory.create(categoryData);
        if(category)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateBoardMembersCategory();