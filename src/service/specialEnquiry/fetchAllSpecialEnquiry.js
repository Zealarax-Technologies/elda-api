const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchSpecialEnquiry{

    async execute(page = 1)
    {
        const pageSize = 20;
        const enquiry = await paginate(models.SpecialEnquiry, {
            page,
            pageSize
        });

        if(enquiry)
        {
            return enquiry;
        }

        return false;
    }

    async getEnquiry(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const programme = await this.execute(query.page);
            if(programme){
                return programme;
            }

            return false;
        }

        const enquiry = await models.SpecialEnquiry.findAll();

        if(enquiry)
        {
            return enquiry;
        }

        return false;
    }
}

module.exports = new FetchSpecialEnquiry();