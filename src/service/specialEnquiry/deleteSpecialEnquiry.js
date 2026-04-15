const models = require('../../models');

class DeleteSpecialEnquiry{

    async execute(id)
    {
        const enquiry = await models.SpecialEnquiry.findByPk(id);
        if(enquiry)
        {
            return await enquiry.destroy();
        }

        return false;
    }
}

module.exports = new DeleteSpecialEnquiry();