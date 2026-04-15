const models = require('../../models');

class DeleteContactDetails{

    async execute(id)
    {
        const details = await models.ContactDetails.findByPk(id);
        if(details)
        {
            return await details.destroy();
        }

        return false;
    }
}

module.exports = new DeleteContactDetails();