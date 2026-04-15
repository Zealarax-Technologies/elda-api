const models = require('../../models');

class UpdateAdmissionDetails{

    async execute(id, detailsData)
    {
        const details = await models.AdmissionDetails.findByPk(id);
        if(details)
        {
            return await details.update(detailsData);
        }

        return false;
    }
}

module.exports = new UpdateAdmissionDetails();