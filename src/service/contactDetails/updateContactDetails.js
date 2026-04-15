const models = require('../../models');

class UpdateContactDetails{

    async execute(id, contactData)
    {
        const details = await models.ContactDetails.findByPk(id);
        if(details)
        {
            return await details.update(contactData);
        }

        return false;
    }
}

module.exports = new UpdateContactDetails();