const models = require('../../models');

class FetchSingleBoardMember{

    async execute(id)
    {
        const members = await models.BoardMember.findByPk(id, {include: [
            {
                model: models.BoardMembersCategory,
                as: 'category'
            }
        ]});
        if(members)
        {
            return members;
        }

        return false;
    }
}

module.exports = new FetchSingleBoardMember();