const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllBoardMembersCategory{

    async execute(page = 1)
    {
        console.log(true)
        const pageSize = 20;
        const category = await paginate(models.BoardMembersCategory, {
            page,
            pageSize
        });

        if(category)
        {
            return category;
        }

        return false;
    }
}

module.exports = new FetchAllBoardMembersCategory();