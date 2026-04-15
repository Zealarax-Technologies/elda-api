const models = require('../../models');

class FetchSingleOurPartner{

    async execute(id)
    {
        const partner = await models.OurPartner.findByPk(id, {
            include: [
                {
                    model: models.PartnerCategory,
                    as: 'category'
                }
            ],
        });
        if(partner)
        {
            return partner;
        }

        return false;
    }
}

module.exports = new FetchSingleOurPartner();