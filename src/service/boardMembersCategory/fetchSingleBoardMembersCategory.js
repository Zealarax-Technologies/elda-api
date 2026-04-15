const models = require('../../models');

class FetchSingleBoardMembersCategory{

    async execute(id)
    {
        const category = await models.BoardMembersCategory.findByPk(id);
        if(category)
        {
            return category;
        }

        return false;
    }
}

module.exports = new FetchSingleBoardMembersCategory();