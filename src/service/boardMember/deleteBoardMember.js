const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeleteBoardMember{

    async execute(id)
    {
        const member = await models.BoardMember.findByPk(id);
        if(member)
        {
            if(member.image)
            {
                imageRemover(member.image);
            }
            return await member.destroy();
        }

        return false;
    }
}

module.exports = new DeleteBoardMember();