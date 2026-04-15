const models = require('../../models');

class DeleteAdmissionDetails{

    async execute(id)
    {
        const details = await models.AdmissionDetails.findByPk(id);
        if(details)
        {
            return await details.destroy();
        }

        return false;
    }
}

module.exports = new DeleteAdmissionDetails();