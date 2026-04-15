const { Op } = require('sequelize');
const models = require('../../models');

class FetchSingleAccountDetails{

    async execute(id)
    {
        const details = await models.AccountDetails.findByPk(id);
        if(details)
        {
            return details;
        }

        return false;
    }
}

module.exports = new FetchSingleAccountDetails();