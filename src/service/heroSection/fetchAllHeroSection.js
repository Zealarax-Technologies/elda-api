const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllHeroSection{

    async execute(page = 1)
    {
        const pageSize = 20;
        const hero = await paginate(models.HeroSection, {
            page,
            pageSize
        });

        if(hero)
        {
            return hero;
        }

        return false;
    }

    async getSliders(limit = 3){

        const hero = await models.HeroSection.findAll({
            limit: parseInt(limit),
        });

        if(hero)
        {
            return hero;
        }

        return false;
    }
}

module.exports = new FetchAllHeroSection;