const models = require('../../models');

class CreateContactDetails{

    async execute(contactData)
    {
        const details = await models.ContactDetails.create(contactData);
        if(details)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateContactDetails();