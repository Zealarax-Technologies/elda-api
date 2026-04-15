const models = require('../../models');
const createPartnershipImage = require('./createPartnershipImage');

class UpdatePartnership{

    async execute(id, partnershipData)
    {
        console.log(partnershipData);
        const partnership = await models.Partnership.findByPk(id);
        if(partnership)
        {
            if(partnershipData.images?.length > 0)
            {
                createPartnershipImage.execute(partnership.uuid, partnershipData.images);
            }
            return await partnership.update(partnershipData);
        }

        return false;
    }
}

module.exports = new UpdatePartnership();