const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllAccountDetails{

    async execute(page = 1)
    {
        const pageSize = 20;
        const details = await paginate(models.AccountDetails, {
            page,
            pageSize,
        });

        if(details)
        {
            return details;
        }

        return false;
    }

    async getAccountDetails(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const details = await this.execute(query.page);
            if(details){
                return details;
            }

            return false;
        }

        const details = await models.AccountDetails.findOne({where: {
            default: true
        }});

        if(details){
            return details;
        }

        return false;
    }
}

module.exports = new FetchAllAccountDetails();