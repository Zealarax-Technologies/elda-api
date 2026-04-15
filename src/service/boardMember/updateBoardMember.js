const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdateBoardMember{

    async execute(id, memberData)
    {
        const member = await models.BoardMember.findByPk(id);
        if(member)
        {
            if(memberData?.image && member.image)
            {
                imageRemover(member.image);
            }
            return await member.update(memberData);
        }

        return false;
    }
}

module.exports = new UpdateBoardMember();