const models = require('../../models');

class CreateAdmissionDetails{

    async execute(detailsData)
    {
        const details = await models.AdmissionDetails.create(detailsData);
        if(details)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateAdmissionDetails();