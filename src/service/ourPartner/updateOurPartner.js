const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdateOurPartner{

    async execute(id, partnerData)
    {
        const partner = await models.OurPartner.findByPk(id);
        if(partner)
        {
            if(partnerData?.image && partner.image)
            {
                imageRemover(partner.image);
            }
            return await partner.update(partnerData);
        }

        return false;
    }
}

module.exports = new UpdateOurPartner();