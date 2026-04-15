const models = require('../../models');

class FetchSingleSocialMedia{

    async execute(id)
    {
        const socialMedia = await models.SocialMedia.findByPk(id);
        if(socialMedia)
        {
            return socialMedia;
        }

        return false;
    }
}

module.exports = new FetchSingleSocialMedia();