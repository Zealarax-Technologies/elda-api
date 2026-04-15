const models = require('../../models');

class FetchSingleHeroSection{

    async execute(id)
    {
        const hero = await models.HeroSection.findByPk(id);

        if(hero)
        {
            return hero;
        }

        return false;
    }
}

module.exports = new FetchSingleHeroSection();