const { Op } = require('sequelize');
const models = require('../../models');

class CreateAccountDetails{

    async execute(detailsData)
    {
        const details = await models.AccountDetails.create(detailsData);
        if(details)
        {
            if(detailsData?.default){
                await models.AccountDetails.update(
                    { default: false },
                    { where: { default: true, uuid: { [Op.ne]: details.uuid } } }
                );
            }

            return true;
        }

        return false;
    }
}

module.exports = new CreateAccountDetails();