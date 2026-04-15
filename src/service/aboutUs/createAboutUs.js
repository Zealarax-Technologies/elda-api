const models = require('../../models');

class CreateAboutUs{

    async execute(aboutUsData)
    {
        const aboutus = await models.AboutUs.create(aboutUsData);
        if(aboutus)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateAboutUs();