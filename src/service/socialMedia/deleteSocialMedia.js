const models = require('../../models');

class DeleteSocialMedia{

    async execute(id)
    {
        const socialMedia = await models.SocialMedia.findByPk(id);
        if(socialMedia)
        {
            return await socialMedia.destroy();
        }

        return false;
    }
}

module.exports = new DeleteSocialMedia();