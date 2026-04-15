const { Op } = require('sequelize');
const models = require('../../models');

class FetchSingleAdmissionDetails{

    async execute(keyword)
    {
        const details = await models.AdmissionDetails.findOne({where: {
            [Op.or]: [
                { uuid: keyword }, 
                { keyword: keyword }
            ]
        }});
        if(details)
        {
            return details;
        }

        return false;
    }
}

module.exports = new FetchSingleAdmissionDetails();