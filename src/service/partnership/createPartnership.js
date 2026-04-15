const models = require('../../models');
const createPartnershipImage = require('./createPartnershipImage');

class CreatePartnership{

    async execute(partnershipData)
    {
        console.log(partnershipData);
        const partnership = await models.Partnership.create(partnershipData);
        if(partnership)
        {
            if(partnershipData.images?.length > 0)
            {
                createPartnershipImage.execute(partnership.uuid, partnershipData.images);
            }
            return true;
        }

        return false;
    }

    
}

module.exports = new CreatePartnership();