const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdateHeroSection{

    async execute(id, heroData)
    {
        const hero = await models.HeroSection.findByPk(id);

        if(hero)
        {
            if(heroData?.image && hero.image)
            {
                imageRemover(hero.image);
            }

            return await hero.update(heroData);
        }

        return false;
    }
}

module.exports = new UpdateHeroSection();