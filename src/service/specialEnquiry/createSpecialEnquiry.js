const models = require('../../models');

class CreateSpecialEnquiry{

    async execute(specialEnquiryData)
    {
        const enquiry = await models.SpecialEnquiry.create(specialEnquiryData);
        if(enquiry)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateSpecialEnquiry();