const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllAdmissionDetails{

    async execute(page = 1)
    {
        const pageSize = 20;
        const details = await paginate(models.AdmissionDetails, {
            page,
            pageSize,
        });

        if(details)
        {
            return details;
        }

        return false;
    }

    async getAdmissionDetails(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const announcement = await this.execute(query.page);
            if(announcement){
                return announcement;
            }

            return false;
        }

        const details = await models.AdmissionDetails.findAll();

        if(details.length){
            return details;
        }

        return false;
    }
}

module.exports = new FetchAllAdmissionDetails();