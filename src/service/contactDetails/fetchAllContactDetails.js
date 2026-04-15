const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchContactDetails{

    async execute(page = 1)
    {
        const pageSize = 20;
        const details = await paginate(models.ContactDetails, {
            page,
            pageSize,
            order: [['order_no', 'ASC']]
        });

        if(details)
        {
            return details;
        }

        return false;
    }

    async getContactDetails(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const details = await this.execute(query.page);
            if(details){
                return details;
            }

            return false;
        }

        const details = await models.ContactDetails.findAll({
            order: [['order_no', 'ASC']]
        });

        if(details){
            return details;
        }

        return false;
    }
}

module.exports = new FetchContactDetails();