const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeleteAboutUs{

    async execute(id)
    {
        const aboutus = await models.AboutUs.findByPk(id);
        if(aboutus)
        {
            if(aboutus.image)
            {
                imageRemover(aboutus.image);
            }
            return await aboutus.destroy();
        }

        return false;
    }
}

module.exports = new DeleteAboutUs();