const models = require('../../models');

class FetchSinglePartnership{

    async execute(id)
    {
        const partnership = await models.Partnership.findByPk(id, {include: [
            {
                model: models.PartnershipImage,
                as: 'images'
            }
        ]});
        if(partnership)
        {
            return partnership;
        }

        return false;
    }
}

module.exports = new FetchSinglePartnership();