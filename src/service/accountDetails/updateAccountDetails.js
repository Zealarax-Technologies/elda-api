const { Op } = require('sequelize');
const models = require('../../models');

class UpdateAccountDetails{

    async execute(id, detailsData)
    {
        const details = await models.AccountDetails.findByPk(id);
        if(details)
        {
            if(detailsData?.default){
                await models.AccountDetails.update(
                    { default: false },
                    { where: { default: true, uuid: { [Op.ne]: details.uuid } } }
                );
            }
            return await details.update(detailsData);
        }

        return false;
    }
}

module.exports = new UpdateAccountDetails();