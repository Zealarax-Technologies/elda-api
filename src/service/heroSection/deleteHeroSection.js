const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeleteHeroSection{

    async execute(id)
    {
        const hero = await models.HeroSection.findByPk(id);

        if(hero)
        {
            if(hero.image)
            {
                imageRemover(hero.image);
            }
            return await hero.destroy();
        }

        return false;
    }
}

module.exports = new DeleteHeroSection();