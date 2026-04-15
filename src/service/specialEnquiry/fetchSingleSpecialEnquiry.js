const models = require('../../models');

class DeleteSpecialEnquiry{

    async execute(keyword)
    {
        const enquiry = await models.SpecialEnquiry.findOne({where: {keyword: keyword}});
        if(enquiry)
        {
            return enquiry;
        }

        return false;
    }
}

module.exports = new DeleteSpecialEnquiry();