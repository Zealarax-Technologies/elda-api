const models = require('../../models');

class DeleteAccountDetails{

    async execute(id)
    {
        const details = await models.AccountDetails.findByPk(id);
        if(details)
        {
            return await details.destroy();
        }

        return false;
    }
}

module.exports = new DeleteAccountDetails();