const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeleteOurPartner{

    async execute(id)
    {
        const partner = await models.OurPartner.findByPk(id);
        if(partner)
        {
            if(partner.image)
            {
                imageRemover(partner.image);
            }
            return await partner.destroy();
        }

        return false;
    }
}

module.exports = new DeleteOurPartner();