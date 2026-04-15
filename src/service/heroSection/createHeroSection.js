const models = require('../../models');

class CreateHeroSection{

    async execute(heroData)
    {
        const hero = await models.HeroSection.create(heroData);
        if(hero)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateHeroSection();