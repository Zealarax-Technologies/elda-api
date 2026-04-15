const models = require('../../models');

class DeleteContactDetails{

    async execute(keyword)
    {
        const details = await models.ContactDetails.findOne({where: {keyword: keyword}});
        if(details)
        {
            return details;
        }

        return false;
    }
}

module.exports = new DeleteContactDetails();