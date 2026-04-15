const models = require('../../models');

class UpdateSocialMedia{

    async execute(id, socialMediaData)
    {
        const socialMedia = await models.SocialMedia.findByPk(id);
        if(socialMedia)
        {
            return await socialMedia.update(socialMediaData);
        }

        return false;
    }
}

module.exports = new UpdateSocialMedia();