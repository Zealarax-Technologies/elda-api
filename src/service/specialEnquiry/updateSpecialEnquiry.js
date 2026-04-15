const models = require('../../models');

class UpdateSpecialEnquiry{

    async execute(id, specialEnquiryData)
    {
        const enquiry = await models.SpecialEnquiry.findByPk(id);
        if(enquiry)
        {
            return await enquiry.update(specialEnquiryData);
        }

        return false;
    }
}

module.exports = new UpdateSpecialEnquiry();