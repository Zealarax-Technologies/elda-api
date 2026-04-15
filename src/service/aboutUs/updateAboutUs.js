const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdateAboutUs{

    async execute(id, aboutUsData)
    {
        const aboutus = await models.AboutUs.findByPk(id);
        if(aboutus)
        {
            if(aboutUsData?.image && aboutus.image)
            {
                imageRemover(aboutus.image);
            }
            return await aboutus.update(aboutUsData);
        }

        return false;
    }
}

module.exports = new UpdateAboutUs();