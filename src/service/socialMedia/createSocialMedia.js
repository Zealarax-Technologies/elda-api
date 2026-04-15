const models = require('../../models');

class CreateSocialMedia{

    async execute(socialMediaData)
    {
        const socialMedia = await models.SocialMedia.create(socialMediaData);
        if(socialMedia)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateSocialMedia();