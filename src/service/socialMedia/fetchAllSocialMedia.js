const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllSocialMedia{

    async execute(page = 1)
    {
        const pageSize = 20;
        const socialMedia = await paginate(models.SocialMedia, {
            page,
            pageSize
        });

        if(socialMedia)
        {
            return socialMedia;
        }

        return false;
    }

    async getSocials(query){
        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const socials = await this.execute(query.page);
            if(socials){
            return socials;
            }
    
            return false;
        }
    
        const socials = await models.SocialMedia.findAll();
        if(socials.length){
            return socials;
        }
    
        return false;
    }
}

module.exports = new FetchAllSocialMedia();