const { Op } = require('sequelize');
const models = require('../../models');

class FetchSingleAboutUs{

    async execute(keyword)
    {
        const aboutus = await models.AboutUs.findOne({where: {
            [Op.or]: [
                { uuid: keyword }, 
                { keyword: keyword }
            ]
        }});
        if(aboutus)
        {
            return aboutus;
        }

        return false;
    }
}

module.exports = new FetchSingleAboutUs();