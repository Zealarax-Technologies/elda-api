const models = require('../../models');

class CreateOurPartner{

    async execute(partnerData)
    {
        const partner = await models.OurPartner.create(partnerData);
        if(partner)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateOurPartner();