const models = require('../../models');

class CreateBoardMember{

    async execute(memberData)
    {
        const members = await models.BoardMember.create(memberData);
        if(members)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateBoardMember();